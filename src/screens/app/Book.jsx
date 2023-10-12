import { StatusBar, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import theme from "../../constants/theme";
import Layout from "../../componenents/organisms/Layout";
import CardBook from "../../components/global/card/book";

const Book = ({ navigation }) => {
  return (
    <Layout
      title={"Nom du livre"}
      navigation={navigation}
      userExist={true}
      progress={100}
      bookScreen={false}>
      <View style={{ width: "100%", flex: 1, flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }}>
       
      </View>
    </Layout>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContents: {},
});
