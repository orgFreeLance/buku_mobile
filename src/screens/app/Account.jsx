import { StatusBar, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import theme from "../../constants/theme";
import Layout from "../../layouts/organisms/Layout";

const Account = ({ navigation }) => {
  return (
    <Layout
      title={"Paramètres"}
      navigation={navigation}
      userExist={true}
      progress={100}
      accountScreen={false}>
        
      </Layout>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContents: {},
});
