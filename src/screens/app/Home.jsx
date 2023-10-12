import { Text, View } from "native-base";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import theme from "../../constants/theme";
import Layout from "../../componenents/organisms/Layout";
import CardBook from "../../components/global/card/book";
import CardGender from "../../components/global/card/genre";
import { TOUCHABLEOPACITY } from "../../constants";
import goTo from "../../utils/goTo";

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
      <View style={styles.header}>
        <Text style={styles.title}>
          Explorer par genre
        </Text>
        <TouchableOpacity activeOpacity={TOUCHABLEOPACITY} onPress={() => goTo(navigation, "Genre")}>
          <Ionicons name="ios-arrow-forward-outline" size={20} color={theme.colors.brand.secondary} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        <CardGender />
        <CardGender />
        <CardGender />
      </ScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>Recommandé pour vous</Text>
        <TouchableOpacity activeOpacity={TOUCHABLEOPACITY} onPress={() => goTo(navigation, "BookByGenre")}>
          <Ionicons name="ios-arrow-forward-outline" size={20} color={theme.colors.brand.secondary} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} >
        <CardBook />
        <CardBook />
        <CardBook />
      </ScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>Meilleurs ventes</Text>
        <TouchableOpacity activeOpacity={TOUCHABLEOPACITY} onPress={() => goTo(navigation, "BookByGenre")}>
          <Ionicons name="ios-arrow-forward-outline" size={20} color={theme.colors.brand.secondary} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} >
        <CardBook />
        <CardBook />
        <CardBook />
      </ScrollView>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({

  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 1,
  },
  title: {
    fontWeight: "700",
    fontSize: 18,
    paddingVertical: 10,
    color: "black"
  },
  mainContents: {},
});
