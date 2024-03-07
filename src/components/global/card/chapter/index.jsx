import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import appStore from "../../../../store/app";
import theme from "../../../../constants/theme";
import { TouchableOpacity } from "react-native";
import { TOUCHABLEOPACITY, headers } from "../../../../constants";
import { FontAwesome5 } from "@expo/vector-icons";
import ModalContainer from "../../modal/notification";
import { useEffect, useState } from "react";
import ImageViewer from "../../imageViewer";
import Loader from "../../Loader";
import ButtonBuy from "../../button/buy";
import userStore from "../../../../store/user";
import { getUserChapterBuyed } from "../../../../constants/url";
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
  const [modal, setModal] = useState(false);
  const [modalRead, setModalRead] = useState(false);
  const [buyed, setBuyed] = useState(false);
  const openModal = () => {
    if (!loading)
      if (buyed) {
        setModalRead(true);
      } else {
        setModal(true);
      }
  };
  const closeModal = () => {
    setModal(false);
  };
  const closeModalRead = () => {
    setModalRead(false);
  };
  const buyCoin = () => {};
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
            }}
          >
            {loading && (
              <ActivityIndicator
                size="small"
                color={theme.colors.brand.secondary}
              />
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
            <Text style={{ fontWeight: "400", fontSize: 16, paddingTop: 5 }}>
              #{number}
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 16, paddingTop: 5 }}>
              <FontAwesome5
                name="coins"
                style={{ paddingRight: 5 }}
                size={16}
                color={theme.colors.brand.secondary}
              />
              {coinsPrice}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <ModalContainer closeModal={closeModal} modal={modal}>
        <>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <ImageViewer selectedImage={shop} />
          </View>
          <Loader loading={loading}>
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
                <View style={styles.content}>
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
              onPress={buyCoin}
            />
          </View>
        </>
      </ModalContainer>
      <ModalContainer closeModal={closeModalRead} modal={modalRead}>
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
            <ButtonBuy name={"Annuler"} color="red" onPress={closeModalRead} />
            <ButtonBuy
              name={"Lire"}
              color={theme.colors.brand.secondary}
              onPress={readChapter}
            />
          </View>
        </>
      </ModalContainer>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 80,
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
