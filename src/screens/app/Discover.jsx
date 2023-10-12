import { StatusBar, Text, View } from "native-base";
import { ScrollView, StyleSheet } from "react-native";
import theme from "../../constants/theme";
import Layout from "../../componenents/organisms/Layout";
import CardBook from "../../components/global/card/book";

const Discover = ({ navigation }) => {
  return (
    <Layout
      title={"Découvertes"}
      navigation={navigation}
      userExist={true}
      progress={100}
      discoverScreen={false}>
      <View style={{ width: "100%", flex: 1, flexWrap: "wrap", flexDirection: "row", justifyContent: "space-evenly" }}>
        <CardBook horizontal={false} />
        <CardBook horizontal={false} />
        <CardBook horizontal={false} />
        <CardBook horizontal={false} />
        <CardBook horizontal={false} />
        <CardBook horizontal={false} />
        <CardBook horizontal={false} />
        <CardBook horizontal={false} />
        <CardBook horizontal={false} />
        <CardBook horizontal={false} />
        <CardBook horizontal={false} />
      </View>
    </Layout>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContents: {},
});
