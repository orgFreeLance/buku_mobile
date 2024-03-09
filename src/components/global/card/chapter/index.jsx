import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Platform,
  PermissionsAndroid,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import appStore from "../../../../store/app";
import theme from "../../../../constants/theme";
import { TouchableOpacity } from "react-native";
import { TOUCHABLEOPACITY, headers } from "../../../../constants";
import { FontAwesome5 } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import ImageViewer from "../../imageViewer";
import Loader from "../../Loader";
import ButtonBuy from "../../button/buy";
import userStore from "../../../../store/user";
import { buyUserChapter, getUserChapterBuyed } from "../../../../constants/url";
import ModalContainerChapter from "../../modal/chapter";

const shop = require("../../../../../assets/coin/shop.png");

export default function CardChapter({
  id,
  number,
  name,
  fileLink,
  resume,
  coinsPrice,
  navigation,
}) {
  const { currentBook } = appStore();
  const { userCoins, id: userId } = userStore();
  const [loading, setLoading] = useState(false);
  const [loadingBuyChapter, setLoadingBuyChapter] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalRead, setModalRead] = useState(false);
  const [buyed, setBuyed] = useState(false);
  const openModal = () => {
    if (!loading) {
      if (buyed) {
        setModalRead(true);
      } else {
        setModal(true);
      }
    }
  };
  const closeModal = () => {
    setModal(false);
  };
  const closeModalRead = () => {
    setModalRead(false);
  };

  const checkPermission = async () => {
    // Function to check the platform
    // If Platform is Android then check for permissions.
    console.log(PermissionsAndroid);

    if (Platform.OS === "ios") {
      downloadFile();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "Storage Permission Required",
            message:
              "Application needs access to your storage to download File",
          }
        );
        console.log(granted)
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Start downloading
          downloadFile();
          console.log("Storage Permission Granted.");
        } else {
          // If permission denied then show alert
          Alert.alert("Erreur", "Permission d'accés au stockage !");
        }
      } catch (err) {
        // To handle permission related exception
        console.log("++++" + err);
      }
    }
  };
  const downloadFile = () => {
    // Get today's date to add the time suffix in filename
    let date = new Date();
    // File URL which we want to download
    let FILE_URL = fileLink;
    // Function to get extention of the file url
    let file_ext = getFileExtention(FILE_URL);

    file_ext = "." + file_ext[0];

    // config: To get response by passing the downloading related options
    // fs: Root directory path to download
    const { config, fs } = RNFetchBlob;
    let RootDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        path:
          RootDir +
          "/file_" +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          file_ext,
        description: "downloading file...",
        notification: true,
        // useDownloadManager works with Android only
        useDownloadManager: true,
      },
    };
    config(options)
      .fetch("GET", FILE_URL)
      .then((res) => {
        // Alert after successful downloading
        console.log("res -> ", JSON.stringify(res));
        alert("File Downloaded Successfully.");
      });
  };
  const getFileExtention = (fileUrl) => {
    // To get the file extension
    return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
  };

  const buyChapter = () => {
    setLoadingBuyChapter(true);
    fetch(`${buyUserChapter()}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ data: { userId: userId, chapterId: +id } }),
    })
      .then(async (res) => {
        const status = res.status;
        const data = await res.json();
        return { ...data, status };
      })
      .then(({ data }) => {
        if (data) {
          setBuyed(true);
        }
        setLoadingBuyChapter(false);
      });
  };

  const readChapter = () => {};

  useEffect(() => {
    setLoading(true);
    fetch(`${getUserChapterBuyed({ userId, chapterId: id })}`, {
      headers: headers,
    })
      .then(async (res) => {
        const status = res.status;
        const data = await res.json();
        return { ...data, status };
      })
      .then(({ data }) => {
        setLoading(false);
        if (data) setBuyed(true);
      });
  }, [navigation]);

  return (
    <>
      <View
        style={{
          overflow: "hidden",
          borderRadius: 5,
          position: "relative",
        }}
      >
        <TouchableOpacity
          style={styles.card}
          onPress={openModal}
          activeOpacity={TOUCHABLEOPACITY}
        >
          <View
            style={{
              position: "absolute",
              top: 5,
              right: 5,
              padding: 5,
            }}
          >
            {loading ? (
              <ActivityIndicator
                size="small"
                color={theme.colors.brand.secondary}
              />
            ) : (
              <>
                {buyed && (
                  <View style={{ flexDirection: "row" }}>
                    <Ionicons
                      name="download"
                      size={16}
                      style={{ marginRight: 5 }}
                      color={"green"}
                    />
                    <FontAwesome5
                      name="book-reader"
                      size={16}
                      color={theme.colors.brand.secondary}
                    />
                  </View>
                )}
              </>
            )}
          </View>
          <View style={{ overflow: "hidden" }}>
            <ImageBackground
              source={{ uri: currentBook?.picture }}
              style={{ width: 100, height: 100 }}
            />
          </View>
          <View style={{ paddingLeft: 10, paddingVertical: 10 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontVariant: "smallcaps",
                fontSize: 20,
              }}
            >
              {name}
            </Text>
            <Text style={{ fontWeight: "500", fontSize: 16, paddingTop: 5 }}>
              #{number}
            </Text>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 16,
                  paddingTop: 5,
                  paddingRight: 2,
                }}
              >
                <FontAwesome5
                  name="coins"
                  size={16}
                  color={theme.colors.brand.secondary}
                />
              </Text>
              <Text style={{ fontWeight: "500", fontSize: 16, paddingTop: 5 }}>
                {coinsPrice}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <ModalContainerChapter closeModal={closeModal} modal={modal}>
        <>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              backgroundColor: theme.colors.brand.secondary,
              paddingVertical: 15,
              paddingHorizontal: 5,
              width: "100%",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "700",
                color: "white",
                paddingRight: 5,
              }}
            >
              Vos
            </Text>
            <Text
              style={{
                fontSize: 48,
                fontWeight: "700",
                color: "white",
              }}
            >
              <FontAwesome5
                name="coins"
                style={{ paddingRight: 5 }}
                size={30}
                color={"white"}
              />
            </Text>
            <Text
              style={{
                fontSize: 48,
                fontWeight: "700",
                paddingHorizontal: 5,
                color: "white",
              }}
            >
              {`${userCoins}`}
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "700",
                color: "white",
              }}
            >
              Piece(s)
            </Text>
          </View>
          <Loader loading={loading || loadingBuyChapter}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <ImageViewer selectedImage={shop} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <View style={styles.modal}>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    paddingBottom: 10,
                    fontSize: 18,
                  }}
                >
                  CHAPITRE ({number}) : " {name} "
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "400",
                    paddingBottom: 10,
                    fontSize: 18,
                  }}
                >
                  Etes vous sur de vouloir achetez le chapitre {number} ?
                </Text>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "auto",
                  }}
                >
                  <FontAwesome5
                    name="coins"
                    style={{ paddingRight: 5 }}
                    size={24}
                    color={theme.colors.brand.secondary}
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "600",
                      fontSize: 18,
                    }}
                  >
                    {coinsPrice}
                  </Text>
                </View>
              </View>
            </View>
          </Loader>
          <View style={{ flexDirection: "row" }}>
            <ButtonBuy name={"Annuler"} color="red" onPress={closeModal} />
            <ButtonBuy
              name={"Acheter"}
              color={theme.colors.brand.secondary}
              onPress={buyChapter}
            />
          </View>
        </>
      </ModalContainerChapter>
      <ModalContainerChapter closeModal={closeModalRead} modal={modalRead}>
        <>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <ImageBackground
              source={{ uri: currentBook?.picture }}
              style={{ width: "100%", height: 200, borderRadius: 20 }}
            />
          </View>
          <Loader loading={loading}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
                paddingTop: 10,
              }}
            >
              <View style={styles.modal}>
                <Text
                  style={{
                    textAlign: "left",
                    fontWeight: "700",
                    paddingBottom: 10,
                    fontSize: 18,
                  }}
                >
                  CHAPITRE ({number}) : " {name} "
                </Text>

                <View style={styles.content}>
                  <Text
                    numberOfLines={15}
                    style={{
                      textAlign: "left",
                      fontWeight: "400",
                      paddingBottom: 10,
                      fontSize: 18,
                    }}
                  >
                    {resume}
                  </Text>
                </View>
              </View>
            </View>
          </Loader>
          <View style={{ flexDirection: "row" }}>
            <ButtonBuy
              width="33%"
              name={"Annuler"}
              color="red"
              onPress={closeModalRead}
            />
            <ButtonBuy
              width="33%"
              name={"Telecharger"}
              color={"green"}
              onPress={checkPermission}
            />
            <ButtonBuy
              width="33%"
              name={"Lire"}
              color={theme.colors.brand.secondary}
              onPress={readChapter}
            />
          </View>
        </>
      </ModalContainerChapter>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 90,
    marginBottom: 5,
    borderRadius: 5,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: theme.colors.brand.gray,
  },
  modal: {
    paddingBottom: 10,
    width: "100%",
  },
  content: {
    width: "100%",
  },
});
