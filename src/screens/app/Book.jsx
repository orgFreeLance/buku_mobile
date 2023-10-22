import { Text, View } from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import LayoutBook from "../../layouts/organisms/LayoutBook";
import appStore from "../../store/app";
import theme from "../../constants/theme";
import CardCategoryBook from "../../components/global/card/categoryBook";
import { getDate } from "../../constants";

const Book = ({ navigation }) => {
  const { currentBook } = appStore()
  return (
    <LayoutBook
      title={""}
      navigation={navigation}
      userExist={true}
      progress={100}
      bookScreen={false}>
      <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
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
      </View>
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
    borderRadius: 20,
    overflow: "hidden"
  },
  containerRight: {
    width: "70%",
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  containerCategory: {
    width: "100%",
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
