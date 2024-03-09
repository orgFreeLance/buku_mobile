import { StyleSheet, ScrollView, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import appStore from "../../store/app";
import { API_LINK, BORDERRADIUS, headers } from "../../constants";
import { useEffect, useState } from "react";
import {
  categoryOfTomeURl,
  chaptersOfTomeURl,
  createTomeFavoriteURL,
  tomeURl,
} from "../../constants/url";
import userStore from "../../store/user";
import Loader from "../../components/global/Loader";
import Error from "../../components/global/error";
import ModalContainer from "../../components/global/modal/notification";
import ButtonBuy from "../../components/global/button/buy";
import ImageViewer from "../../components/global/imageViewer";
import RatingBookDetails from "../../components/global/RatingBookDetails";
import CardStar from "../../components/global/card/star";
import theme from "../../constants/theme";
import LayoutRatings from "../../layouts/LayoutRatings";
import ProgressBarBook from "../../components/global/progressBar";

const shop = require("../../../assets/coin/shop.png");

const Ratings = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [favory, setFavory] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const [modal, setModal] = useState(false);
  const [stars, setStars] = useState([
    { number: "Tout", active: true },
    { number: 1, active: false },
    { number: 2, active: false },
    { number: 3, active: false },
    { number: 4, active: false },
    { number: 5, active: false },
  ]);
  const [active, setActive] = useState("Tout");
  const { currentBook, tomes, appChange } = appStore();
  const { id } = userStore();
  const selectStar = (number) => {
    setActive(number);
    setStars((state) =>
      state.map((item) => ({
        ...item,
        active: item.number == number ? true : false,
      }))
    );
  };

  const createTomeFavorite = () => {
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
        }
      });
  };
  const getComponent = () => {
    return <></>;
  };
  const buyCoin = () => {};
  const onRefresh = () => {
    setRefresh((state) => state + 1);
  };
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const tome = await fetch(`${API_LINK}${tomeURl(currentBook?.id, id)}`, {
          headers,
        }).then(async (res) => {
          const status = res.status;
          const data = await res.json();
          return { ...data, status };
        });
        const category = await fetch(
          `${API_LINK}${categoryOfTomeURl(currentBook?.id)}`,
          { headers }
        ).then(async (res) => {
          const status = res.status;
          const data = await res.json();
          return { ...data, status };
        });
        const chapter = await fetch(
          `${API_LINK}${chaptersOfTomeURl(currentBook?.id)}`,
          { headers }
        ).then(async (res) => {
          const status = res.status;
          const data = await res.json();
          return { ...data, status };
        });
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
        } else {
          throw new Error(tome.status);
        }
        if (category.status == 200) {
          appChange({ currentCategories: category.data });
        } else {
          throw new Error(tome.status);
        }
        if (chapter.status == 200) {
          appChange({ chapters: chapter.data });
        } else {
          throw new Error(chapter.status);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    })();
  }, [refresh]);

  return (
    <LayoutRatings
      favory={favory}
      navigation={navigation}
      createTomeFavorite={createTomeFavorite}
    >
      <RatingBookDetails navigation={navigation} />
      <ProgressBarBook items={tomes} />
      <ScrollView
        horizontal={true}
        style={{
          paddingTop: 10,
          width: "100%",
        }}
      >
        {stars.map(({ number, active }) => (
          <CardStar
            number={number}
            selectStar={selectStar}
            active={active}
            key={number}
          />
        ))}
      </ScrollView>
      <ProgressBarBook items={tomes} />
    </LayoutRatings>
  );
};

export default Ratings;

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
    minHeight: 230,
    maxHeight: 300,
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
