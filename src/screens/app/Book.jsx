import { Text, View } from "native-base";
import { ActivityIndicator, ImageBackground, StyleSheet } from "react-native";
import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';
import LayoutBook from "../../layouts/organisms/LayoutBook";
import appStore from "../../store/app";
import theme from "../../constants/theme";
import CardCategoryBook from "../../components/global/card/categoryBook";
import { API_LINK, BORDERRADIUS, TOUCHABLEOPACITY, getDate, headers } from "../../constants";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { categoryOfTomeURl, chaptersOfTomeURl, createTomeFavoriteURL, tomeURl } from "../../constants/url";
import userStore from "../../store/user";
import BookChapters from "../../components/global/bookChapters";
import BookDetails from "../../components/global/bookDetails";
import CardChoix from "../../components/global/card/choix";
import Loader from "../../components/global/Loader";
import Error from "../../components/global/error";
const Book = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [favory, setFavory] = useState(false)
  const [refresh, setRefresh] = useState(0)
  const [active, setActive] = useState("Détails")
  const { currentBook, tomes, currentCategories, appChange } = appStore()
  const { id } = userStore()

  const createTomeFavorite = () => {
    fetch(`${createTomeFavoriteURL()}`, { headers, method: "POST", body: JSON.stringify({ data: { userId: id, tomeId: currentBook.id } }) }).then(async res => {
      const status = res.status
      const data = await res.json()
      return ({ ...data, status })
    }).then(({ status }) => {
      if (status == 200) {
        setFavory(true)
      }
    })
  }
  const getComponent = () => {
    switch (active) {
      case "Chapitres":
        return <BookChapters />
      case "Détails":
        return <BookDetails />
    }
  }
  const onRefresh = () => {
    setRefresh(state => state + 1)
  }
  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const tome = await fetch(`${API_LINK}${tomeURl(currentBook?.id, id)}`, { headers }).then(async res => {
          const status = res.status
          const data = await res.json()
          return ({ ...data, status })
        });
        const category = await fetch(`${API_LINK}${categoryOfTomeURl(currentBook?.id)}`, { headers }).then(async res => {
          const status = res.status
          const data = await res.json()
          return ({ ...data, status })
        });
        const chapter = await fetch(`${API_LINK}${chaptersOfTomeURl(currentBook?.id)}`, { headers }).then(async res => {
          const status = res.status
          const data = await res.json()
          return ({ ...data, status })
        })
        if (tome.status == 200) {
          appChange({ currentBook: tome.data })
          const { id, ...attributes } = tome.data
          appChange({
            tomes: tomes.map((item) => {
              if (id == item.id) return { id, attributes }
              return item
            })
          })
          setFavory(attributes.favorite)
        } else {
          throw new Error(tome.status)
        }
        if (category.status == 200) {
          appChange({ currentCategories: category.data })
        } else {
          throw new Error(tome.status)
        }
        if (chapter.status == 200) {
          appChange({ chapters: chapter.data })
        } else {
          throw new Error(chapter.status)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setError(true)
        setLoading(false)
      }
    })()

  }, [refresh])

  return (
    <LayoutBook
      favory={favory}
      navigation={navigation}
      createTomeFavorite={createTomeFavorite}
    >
      {loading ? <>
        <Loader loading={loading} />
      </> :
        !error ? <>
          <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
            <View style={styles.picture}>
              <ImageBackground source={{ uri: currentBook?.picture }} style={{ width: "100%", height: "100%" }} />
            </View>
            <View style={styles.containerRight}>
              <Text adjustsFontSizeToFit={true} style={styles.title}>{currentBook.name}</Text>
              <Text style={styles.author}>{currentBook.author}</Text>
              <Text style={styles.createdAt}>publié en {getDate(currentBook.createdAt)}</Text>
              <View style={styles.containerCategory}>
                {currentCategories.map((item) => <CardCategoryBook name={item.name} key={item.id} />)}
              </View>
            </View>

          </View>
          <View style={{ width: "100%", marginVertical: 10, flexDirection: "row", justifyContent: "space-between" }}>
            <View style={styles.card}>
              <Text style={{ fontWeight: "700" }}>
                {currentBook.likesNumber} <AntDesign name="star" style={{ marginLeft: 5 }} size={16} color="black" />
              </Text>
              <Text style={styles.titleCard}>Likes</Text>
            </View>
            <View style={styles.card}>
              <Text style={{ fontWeight: "700" }}>{currentBook.pagesNumber}</Text>
              <Text style={styles.titleCard}>Pages</Text>
            </View>
            <View style={styles.card}>
              <Text style={{ fontWeight: "700", alignItems: "center" }}>
                <AntDesign name="eye" style={{ marginRight: 5 }} size={16} color="black" />
                {currentBook.userViews}
              </Text>
              <Text style={styles.titleCard}>visiteurs</Text>
            </View>
            <View style={styles.card}>
              <Text style={{ fontWeight: "700", alignItems: "center" }}>
                <Entypo name="open-book" style={{ marginRight: 5 }} size={16} color="black" />
                {currentBook.userPurchase}
              </Text>
              <Text style={styles.titleCard}>Lecteurs</Text>
            </View>
          </View>
          <View style={{ borderRadius: 10, overflow: "hidden" }}>
            <TouchableOpacity activeOpacity={TOUCHABLEOPACITY} style={styles.buy}>
              <Text style={{ color: "white", textAlign: "center" }}> {currentBook.coinsPrice} <FontAwesome5 name="coins" style={{ paddingRight: 5 }} size={16} color={"white"} /></Text>
            </TouchableOpacity>
          </View>
          <View style={{
            paddingVertical: 5,
            width: "100%"
          }}>
            <View style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottomColor: theme.colors.brand.secondary,
              borderBottomColor: "gray",
              borderBottomWidth: .3
            }}>
              <CardChoix name={"Détails"} active={active} onPress={() => { setActive("Détails") }} />
              <CardChoix name={"Chapitres"} active={active} onPress={() => { setActive("Chapitres") }} />
            </View>
            <View style={{ width: "100%", marginTop: 5 }}>
              {getComponent()}
            </View>
          </View>
        </> : <Error refresh={onRefresh} />
      }
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
    backgroundColor: theme.colors.brand.secondary
  },
  btn: {
    width: "49.5%",
    height: "auto",
    borderRadius: 10,
  },
  card: {
    borderRightColor: "gray",
    borderRightWidth: 1,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  picture: {
    minHeight: 230,
    maxHeight: 300,
    width: "40%",
    borderRadius: BORDERRADIUS,
    overflow: "hidden"
  },
  containerRight: {
    width: "70%",
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  containerCategory: {
    width: "80%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    paddingBottom: 10
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
    color: theme.colors.brand.secondary
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
  }
});
