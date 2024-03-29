
import { StyleSheet } from "react-native";
import LayoutSearch from "../../layouts/organisms/LayoutSearch";
import PageLoading from "../../components/global/loading";

const Search = ({ navigation }) => {
  return (
    <LayoutSearch
      title={"Parametres"}
      navigation={navigation}
      userExist={true}
      progress={100}
      accountScreen={false}>
      <PageLoading loading={true} />
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
