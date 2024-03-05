import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import theme from "../../constants/theme";
import Layout from "../../layouts/organisms/Layout";
import CardBook from "../../components/global/card/book";
import CardGender from "../../components/global/card/genre";
import { API_LINK, TOUCHABLEOPACITY, headers } from "../../constants";
import goTo from "../../utils/goTo";
import appStore from "../../store/app";
import { useEffect, useState } from "react";
import {
  bookByUserPreferences,
  categoriesURl,
  tomesURl,
} from "../../constants/url";
import ProgressBarBook from "../../components/global/progressBar";
import NoData from "../../components/global/noData";
import userStore from "../../store/user";

const Home = ({ navigation }) => {
  const { categories, tomes, tomesPreferences, appChange } = appStore();
  const [loading, setLoading] = useState(true);
  const { id } = userStore();

  useEffect(() => {
    (async () => {
      try {
        const category = await fetch(`${API_LINK}${categoriesURl}`, {
          headers,
        }).then(async (res) => {
          const status = res.status;
          const data = await res.json();
          return { ...data, status };
        });
        const tomesList = await fetch(`${API_LINK}${tomesURl}`, {
          headers,
        }).then(async (res) => {
          const status = res.status;
          const data = await res.json();
          return { ...data, status };
        });
        const tomesPreferences = await fetch(bookByUserPreferences(id), {
          headers,
        }).then(async (res) => {
          const status = res.status;
          const data = await res.json();
          return { ...data, status };
        });
        appChange({
          categories: category.data.map((item) => ({ ...item, select: false })),
          tomes: tomesList.data.map((item) => ({ ...item, select: false })),
          tomesPreferences: tomesPreferences?.data?.map((item) => ({
            ...item,
            select: false,
          })),
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);
  return (
    <Layout
      title={"Buku"}
      navigation={navigation}
      userExist={true}
      progress={100}
      homeScreen={false}
    >
      <View style={{ width: "100%" }}>
        {loading && <ActivityIndicator color={theme.colors.brand.secondary} />}
      </View>
      <ScrollView horizontal={true} style={{ paddingHorizontal: 5 }}>
        <NoData horizontal items={tomes} />
        {tomes.map(({ attributes, id }) => (
          <CardBook {...attributes} id={id} key={id} navigation={navigation} />
        ))}
      </ScrollView>
      <ProgressBarBook items={tomes} />
      <View style={styles.header}>
        <Text style={styles.title}>Explorer par genre</Text>
        <TouchableOpacity
          activeOpacity={TOUCHABLEOPACITY}
          onPress={() => goTo(navigation, "Genre")}
        >
          <AntDesign
            name="arrowright"
            size={20}
            color={theme.colors.brand.secondary}
          />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        {categories.map(({ attributes, id }) => (
          <CardGender
            {...attributes}
            id={id}
            key={id}
            navigation={navigation}
          />
        ))}
      </ScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>Recommandé pour vous</Text>
        <TouchableOpacity
          activeOpacity={TOUCHABLEOPACITY}
          onPress={() => {
            appChange({
              currentPage: { name: "Recommandé pour vous", id: -1 },
            });
            goTo(navigation, "BookByGenre");
          }}
        >
          <AntDesign
            name="arrowright"
            size={20}
            color={theme.colors.brand.secondary}
          />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} style={{}}>
        <NoData horizontal items={tomesPreferences} />
        {tomesPreferences?.map(({ id, ...attributes }) => (
          <CardBook {...attributes} id={id} key={id} navigation={navigation} />
        ))}
      </ScrollView>
      <ProgressBarBook items={tomes} />
      <View style={styles.header}>
        <Text style={styles.title}>Meilleurs ventes</Text>
        <TouchableOpacity
          activeOpacity={TOUCHABLEOPACITY}
          onPress={() => {
            appChange({ currentPage: { name: "Meilleurs ventes", id: 0 } });
            goTo(navigation, "BookByGenre");
          }}
        >
          <AntDesign
            name="arrowright"
            size={20}
            color={theme.colors.brand.secondary}
          />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} style={{}}>
        <NoData horizontal items={tomes} />
        {tomes.map(({ attributes, id }) => (
          <CardBook {...attributes} id={id} key={id} navigation={navigation} />
        ))}
      </ScrollView>
      <ProgressBarBook items={tomes} />
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
    fontSize: 20,
    paddingVertical: 10,
    color: "black",
  },
  mainContents: {},
});
