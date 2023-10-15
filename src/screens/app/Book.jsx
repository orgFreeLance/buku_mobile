import { StatusBar, View } from "native-base";
import { ImageBackground, Text, StyleSheet } from "react-native";
import theme from "../../constants/theme";
import Layout from "../../componenents/organisms/Layout";
import CardBook from "../../components/global/card/book";
import LayoutBook from "../../componenents/organisms/LayoutBook";
import appStore from "../../store/app";
import { height } from "../../constants/nativeSizes";

const Book = ({ navigation }) => {
  const { currentBook } = appStore()
  console.log(currentBook)
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
          <Text style={styles.title}>{currentBook.name}</Text>
          {/* <Text style={styles.title}>{currentBook.author}</Text> */}
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
    height: 250,
    width: "50%",
    borderRadius: 20,
    overflow: "hidden"
  },
  containerRight: {
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  }
});
