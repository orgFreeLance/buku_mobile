import { StatusBar, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import theme from "../../constants/theme";
import LayoutSearch from "../../layouts/organisms/LayoutSearch";
import CardBook from "../../components/global/card/book";

const Search = ({ navigation }) => {
  return (
    <LayoutSearch
      title={"Parametres"}
      navigation={navigation}
      userExist={true}
      progress={100}
      accountScreen={false}>
      <View style={{ width: "100%", flex: 1, flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }}>
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
    </LayoutSearch>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContents: {},
});
