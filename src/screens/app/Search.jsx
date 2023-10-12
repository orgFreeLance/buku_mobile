import { StatusBar, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import theme from "../../constants/theme";
import LayoutSearch from "../../componenents/organisms/LayoutSearch";

const Search = ({ navigation }) => {
  return (
    <LayoutSearch
      title={"Parametres"}
      navigation={navigation}
      userExist={true}
      progress={100}
      accountScreen={false}></LayoutSearch>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContents: {},
});
