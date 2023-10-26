import { StatusBar, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import theme from "../../constants/theme";
import Layout from "../../layouts/organisms/Layout";

const Coins = ({ navigation }) => {
  return (
    <Layout
      title={"Pieces"}
      navigation={navigation}
      userExist={true}
      progress={100}
      coinScreen={false}>

    </Layout>
  );
};

export default Coins;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContents: {},
});
