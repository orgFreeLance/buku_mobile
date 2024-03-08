import { ImageBackground, StyleSheet, Text, View } from "react-native";
import {
  AntDesign,
  Entypo,
  FontAwesome5,
  Foundation,
} from "@expo/vector-icons";
import LayoutBook from "../../layouts/LayoutBook";
import appStore from "../../store/app";
import theme from "../../constants/theme";
import CardCategoryBook from "../../components/global/card/categoryBook";
import {
  API_LINK,
  BORDERRADIUS,
  TOUCHABLEOPACITY,
  getDate,
  headers,
} from "../../constants";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  categoryOfTomeURl,
  chaptersOfTomeURl,
  createTomeFavoriteURL,
  tomeURl,
} from "../../constants/url";
import userStore from "../../store/user";
import BookChapters from "../../components/global/bookChapters";
import BookDetails from "../../components/global/bookDetails";
import CardChoix from "../../components/global/card/choix";
import Loader from "../../components/global/Loader";
import Error from "../../components/global/error";
import ModalContainer from "../../components/global/modal/notification";
import ButtonBuy from "../../components/global/button/buy";
import ImageViewer from "../../components/global/imageViewer";
import ModalContainerChapter from "../../components/global/modal/chapter";
const shop = require("../../../assets/coin/shop.png");

const Book = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [loadingFavorite, setLoadingFavorite] = useState(false);
  const [loadingChapters, setLoadingChapters] = useState(false);
  const [loadingCategory, setLoadingCategory] = useState(false);
  const [error, setError] = useState(false);
  const [favory, setFavory] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const [modal, setModal] = useState(false);

  const [active, setActive] = useState("Détails");
  const { currentBook, tomes, currentCategories, appChange } = appStore();
  const { id, userCoins } = userStore();

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const createTomeFavorite = () => {
    setLoadingFavorite(true);
    fetch(`${createTomeFavoriteURL()}`, {
      headers,
      method: "POST",
      body: JSON.stringify({ data: { userId: id, tomeId: currentBook.id } }),
    })
      .then(async (res) => {
        const status = res.status;
        const data = await res.json();
        return { ...data, status };
      })
      .then(({ status }) => {
        if (status == 200) {
          setFavory(true);
          appChange({
            currentBook: {
              ...currentBook,
              likesNumber: +currentBook.likesNumber + 1,
            },
          });
        } else {
          setFavory(false);
          appChange({
            currentBook: {
              ...currentBook,
              likesNumber: +currentBook.likesNumber - 1,
            },
          });
        }
        setLoadingFavorite(false);
      })
      .then(() => {
        setLoadingFavorite(false);
      });
  };
  const getComponent = () => {
    switch (active) {
      case "Chapitres":
        return <BookChapters navigation={navigation} />;
      case "Détails":
        return <BookDetails navigation={navigation} />;
    }
  };
  const buyCoin = () => {};
  const onRefresh = () => {
    setRefresh((state) => state + 1);
  };
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setLoadingChapters(true);
        setLoadingCategory(true);
        fetch(`${API_LINK}${tomeURl(currentBook?.id, id)}`, {
          headers,
        })
          .then(async (res) => {
            const status = res.status;
            const data = await res.json();
            return { ...data, status };
          })
          .then((tome) => {
            if (tome.status == 200) {
              appChange({ currentBook: tome.data });
              const { id, ...attributes } = tome.data;
              appChange({
                tomes: tomes.map((item) => {
                  if (id == item.id) return { id, attributes };
                  return item;
                }),
              });
              setFavory(attributes.favorite);
              setLoading(false);
            } else {
              throw new Error(tome.status);
            }
          });
        fetch(`${API_LINK}${categoryOfTomeURl(currentBook?.id)}`, { headers })
          .then(async (res) => {
            const status = res.status;
            const data = await res.json();
            return { ...data, status };
          })
          .then((category) => {
            if (category.status == 200) {
              appChange({ currentCategories: category.data });
            } else {
              throw new Error(tome.status);
            }
            setLoadingCategory(false);
          });
        fetch(`${API_LINK}${chaptersOfTomeURl(currentBook?.id)}`, { headers })
          .then(async (res) => {
            const status = res.status;
            const data = await res.json();
            return { ...data, status };
          })
          .then((chapter) => {
            if (chapter.status == 200) {
              appChange({ chapters: chapter.data });
            } else {
              throw new Error(chapter.status);
            }
            setLoadingChapters(true);
          });
      } catch (error) {
        setError(true);
        setLoading(false);
        setLoadingChapters(false);
        setLoadingCategory(false);
      }
    })();
  }, [refresh]);

  return (
    <LayoutBook
      favory={favory}
      navigation={navigation}
      loadingFavorite={loadingFavorite}
      createTomeFavorite={createTomeFavorite}
    >
      {loading ? (
        <>
          <Loader loading={loading || loadingCategory || loadingChapters} />
        </>
      ) : !error ? (
        <>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.picture}>
              <ImageBackground
                source={{ uri: currentBook?.picture }}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <View style={styles.containerRight}>
              <Text adjustsFontSizeToFit={true} style={styles.title}>
                {currentBook.name}
              </Text>
              <Text style={styles.author}>{currentBook.author}</Text>
              <Text style={styles.createdAt}>
                publié en {getDate(currentBook.createdAt)}
              </Text>
              <View style={styles.containerCategory}>
                {currentCategories.map((item) => (
                  <CardCategoryBook name={item.name} key={item.id} />
                ))}
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              marginVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.card}>
              <Text style={{ fontWeight: "700" }}>
                <AntDesign
                  name="star"
                  style={{ marginRight: 10 }}
                  size={16}
                  color="black"
                />
                {currentBook.likesNumber}
              </Text>
              <Text style={styles.titleCard}>Likes</Text>
            </View>
            <View style={styles.card}>
              <Text style={{ fontWeight: "700" }}>
                <Foundation
                  name="page-multiple"
                  style={{ marginRight: 10 }}
                  size={16}
                  color="black"
                />
                {currentBook.pagesNumber}
              </Text>
              <Text style={styles.titleCard}>Pages</Text>
            </View>
            <View style={styles.card}>
              <Text style={{ fontWeight: "700", alignItems: "center" }}>
                <AntDesign
                  name="eye"
                  style={{ marginRight: 10 }}
                  size={16}
                  color="black"
                />
                {currentBook.userViews}
              </Text>
              <Text style={styles.titleCard}>visiteurs</Text>
            </View>
            <View style={styles.card}>
              <Text style={{ fontWeight: "700", alignItems: "center" }}>
                <Entypo
                  name="open-book"
                  style={{ marginRight: 10 }}
                  size={16}
                  color="black"
                />
                {currentBook.userPurchase}
              </Text>
              <Text style={styles.titleCard}>Lecteurs</Text>
            </View>
          </View>
          <View style={{ borderRadius: 10, overflow: "hidden" }}>
            <TouchableOpacity
              activeOpacity={TOUCHABLEOPACITY}
              onPress={openModal}
              style={styles.buy}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                {currentBook.coinsPrice}{" "}
                <FontAwesome5
                  name="coins"
                  style={{ paddingRight: 5 }}
                  size={16}
                  color={"white"}
                />
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingVertical: 5,
              width: "100%",
            }}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomColor: theme.colors.brand.gray,
                borderBottomWidth: 0.3,
                paddingTop: 10,
              }}
            >
              <CardChoix
                name={"Détails"}
                active={active}
                onPress={() => {
                  setActive("Détails");
                }}
              />
              <CardChoix
                name={"Chapitres"}
                active={active}
                onPress={() => {
                  setActive("Chapitres");
                }}
              />
            </View>
            <View style={{ width: "100%", marginTop: 5 }}>
              {getComponent()}
            </View>
          </View>
        </>
      ) : (
        <Error refresh={onRefresh} />
      )}
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
          <Loader loading={loading}>
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
                  LIVRE : " {currentBook.name} "
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "400",
                    paddingBottom: 10,
                    fontSize: 18,
                  }}
                >
                  Etes vous sur de vouloir achetez tous les chapitres ?
                </Text>
                <View style={styles.contentP}>
                  <FontAwesome5
                    name="coins"
                    style={{ paddingRight: 5 }}
                    size={24}
                    color={theme.colors.brand.secondary}
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    {currentBook.coinsPrice}
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
      </ModalContainerChapter>
    </LayoutBook>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buy: {
    width: "100%",
    padding: 10,
    backgroundColor: theme.colors.brand.secondary,
  },
  btn: {
    width: "49.5%",
    height: "auto",
    borderRadius: 10,
  },
  contentP: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingTop: 0,
  },
  card: {
    borderRightColor: "gray",
    borderRightWidth: 1,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  picture: {
    height: 230,
    width: "40%",
    borderRadius: BORDERRADIUS,
    overflow: "hidden",
  },
  containerRight: {
    width: "70%",
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  containerCategory: {
    width: "80%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    paddingBottom: 10,
  },
  title: {
    width: "80%",
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "700",
    textAlign: "left",
    flexShrink: 1,
  },
  author: {
    width: "100%",
    marginTop: 10,
    fontSize: 14,
    fontWeight: "400",
    textTransform: "uppercase",
    color: theme.colors.brand.secondary,
  },
  createdAt: {
    width: "100%",
    marginTop: 10,
    fontSize: 14,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  titleCard: {
    fontWeight: "400",
    fontSize: 10,
    textTransform: "uppercase",
  },
});
