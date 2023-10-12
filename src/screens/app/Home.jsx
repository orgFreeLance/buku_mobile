import { StatusBar, Text, View } from "native-base";
import { ScrollView, StyleSheet } from "react-native";
import theme from "../../constants/theme";
import Layout from "../../componenents/organisms/Layout";
import CardBook from "../../components/global/card/book";
import CardGender from "../../components/global/card/gender";

const Home = ({ navigation }) => {
  return (
    <Layout
      title={"Buku"}
      navigation={navigation}
      userExist={true}
      progress={100}
      homeScreen={false}>
      <ScrollView horizontal={true} style={{}}>
        <CardBook />
        <CardBook />
        <CardBook />
      </ScrollView>
      <ScrollView horizontal={true} style={{ paddingTop: 10 }}>
        <CardGender />
        <CardGender />
        <CardGender />
      </ScrollView>
      <ScrollView horizontal={true} style={{ paddingTop: 10 }}>
        <CardBook />
        <CardBook />
        <CardBook />
      </ScrollView>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContents: {},
});
