import { Text, View } from "native-base";
import { ActivityIndicator, ImageBackground, StyleSheet } from "react-native";
import { AntDesign, Entypo } from '@expo/vector-icons';
import LayoutBook from "../../layouts/organisms/LayoutBook";
import appStore from "../../store/app";
import theme from "../../constants/theme";
import CardCategoryBook from "../../components/global/card/categoryBook";
import { API_LINK, BORDERRADIUS, TOUCHABLEOPACITY, getDate, headers } from "../../constants";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { categoryOfTomeURl, tomeURl } from "../../constants/url";
const Book = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { currentBook, currentCategories, appChange } = appStore()
  const promises = [
    fetch(`${API_LINK}${tomeURl(currentBook?.id)}`, { headers }).then(async res => {
      const status = res.status
      const data = await res.json()

      return ({ ...data, status })
    }),
    fetch(`${API_LINK}${categoryOfTomeURl(currentBook?.id)}`, { headers }).then(async res => {
      const status = res.status
      const data = await res.json()
      return ({ ...data, status })
    })
  ]
  useEffect(() => {
    setLoading(true)
    Promise.all(promises).then(([tome, category]) => {
      setLoading(false)
      if (tome.status == 200) {
        appChange({ currentBook: tome.data })
      }
      if (category.status == 200) {
        appChange({ currentCategories: category.data })
      }
    })

  }, [])
  console.log(currentBook)
  return (
    <LayoutBook
      title={""}
      navigation={navigation}
      userExist={true}
      progress={100}
      bookScreen={false}>
      {loading ? <>
        <ActivityIndicator color={theme.colors.brand.secondary} />
      </> :
        !error && <>
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
                {currentBook.likesNumber}<AntDesign name="staro" size={16} color="black" />
              </Text>
              <Text style={styles.titleCard}>Likes</Text>
            </View>
            <View style={styles.card}>
              <Text style={{ fontWeight: "700" }}>{currentBook.pagesNumber}</Text>
              <Text style={styles.titleCard}>Pages</Text>
            </View>
            <View style={styles.card}>
              <Text style={{ fontWeight: "700", alignItems: "center" }}>
                <AntDesign name="eye" style={{ marginRight: 2 }} size={16} color="black" />
                {currentBook.userViews}
              </Text>
              <Text style={styles.titleCard}>visiteurs</Text>
            </View>
            <View style={styles.card}>
              <Text style={{ fontWeight: "700", alignItems: "center" }}>
                <Entypo name="open-book" style={{ marginRight: 2 }} size={16} color="black" />
                {currentBook.userPurchase}
              </Text>
              <Text style={styles.titleCard}>Lecteurs</Text>
            </View>
          </View>
          <View style={{ borderRadius: 50, overflow: "hidden" }}>
            <TouchableOpacity activeOpacity={TOUCHABLEOPACITY} style={styles.buy}>
              <Text style={{ color: "white", textAlign: "center" }}> {currentBook.coinsPrice} Pc</Text>
            </TouchableOpacity>
          </View>
        </>
      }
    </LayoutBook>
  ); 56
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
