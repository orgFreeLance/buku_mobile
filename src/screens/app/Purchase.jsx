import { StatusBar, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import theme from "../../constants/theme";
import Layout from "../../layouts/organisms/Layout";

const Purchase = ({ navigation }) => {
  return (
    <Layout
      title={"Achats"}
      navigation={navigation}
      userExist={true}
      progress={100}
      purchaseScreen={false}></Layout>
  );
};

export default Purchase;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContents: {},
});
