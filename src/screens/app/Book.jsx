import { Text, View } from "native-base";
import { ActivityIndicator, ImageBackground, StyleSheet } from "react-native";
import LayoutBook from "../../layouts/organisms/LayoutBook";
import appStore from "../../store/app";
import theme from "../../constants/theme";
import CardCategoryBook from "../../components/global/card/categoryBook";
import { API_LINK, BORDERRADIUS, getDate, headers } from "../../constants";
import { useEffect, useState } from "react";

const Book = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const { currentBook, appChange } = appStore()
  useEffect(() => {
    fetch(`${API_LINK}/tomes/${currentBook.id}?populate=*`, { headers }).then(async res => {
      const status = res.status
      const data = await res.json()
      return ({ ...data, status })
    }).then(({ data, status }) => {
      if (status == 200) {
        appChange({ currentBook: { ...data.attributes, id: data.id } })
      }
      setLoading(false)
    }).catch(error => {
      setLoading(false)
    })
  }, [])
  return (
    <LayoutBook
      title={""}
      navigation={navigation}
      userExist={true}
      progress={100}
      bookScreen={false}>
      {loading ? <>
        <ActivityIndicator color={theme.colors.brand.secondary} />
      </> : <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.picture}>
          <ImageBackground source={{ uri: currentBook.picture }} style={{ width: "100%", height: "100%" }} />
        </View>
        <View style={styles.containerRight}>
          <Text adjustsFontSizeToFit={true} style={styles.title}>{currentBook.name}</Text>
          <Text style={styles.author}>{currentBook.author.data.attributes.username}</Text>
          <Text style={styles.createdAt}>publié en {getDate(currentBook.createdAt)}</Text>
          <View style={styles.containerCategory}>
            {currentBook.categories.data.map((item) => <CardCategoryBook name={item.attributes.name} key={item.id} />)}
          </View>
        </View>
      </View>}
    </LayoutBook>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  picture: {
    height: 230,
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
  }
});
