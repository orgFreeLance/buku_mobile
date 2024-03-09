import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
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
              onPress={readChapter}
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
