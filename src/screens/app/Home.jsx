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
  bookByTomeBuyed,
  bookByTomePopulars,
  bookByUserPreferences,
  categoriesURl,
  tomesURl,
} from "../../constants/url";
import ProgressBarBook from "../../components/global/progressBar";
import NoData from "../../components/global/noData";
import userStore from "../../store/user";

const Home = ({ navigation }) => {
  const {
    categories,
    tomes,
    tomesPreferences,
    tomesPopulars,
    tomesMostBuyed,
    appChange,
  } = appStore();
  const [loading, setLoading] = useState(true);
  const [loadingTomes, setLoadingTomes] = useState(true);
  const [loadingPopulars, setLoadingPopulars] = useState(true);
  const [loadingPreferences, setLoadingPreferences] = useState(true);
  const [loadingBuyed, setLoadingBuyed] = useState(true);
  const { id } = userStore();

  useEffect(() => {
    (async () => {
      try {
        fetch(`${API_LINK}${categoriesURl}`, {
          headers,
        })
          .then(async (res) => {
            const status = res.status;
            const data = await res.json();
            return { ...data, status };
          })
          .then(({ data }) => {
            appChange({
              categories: data.map((item) => ({
                ...item,
                select: false,
              })),
            });
            setLoading(false);
          });
        fetch(`${API_LINK}${tomesURl}`, {
          headers,
        })
          .then(async (res) => {
            const status = res.status;
            const data = await res.json();
            return { ...data, status };
          })
          .then(({ data }) => {
            appChange({
              tomes: data.map((item) => ({ ...item, select: false })),
            });
            setLoadingTomes(false);
          });
        fetch(bookByUserPreferences(id), {
          headers,
        })
          .then(async (res) => {
            const status = res.status;
            const data = await res.json();
            return { ...data, status };
          })
          .then(({ data }) => {
            appChange({
              tomesPreferences: data?.map((item) => ({
                ...item,
                select: false,
              })),
            });
            setLoadingPreferences(false);
          });
        fetch(bookByTomePopulars(), {
          headers,
        })
          .then(async (res) => {
            const status = res.status;
            const data = await res.json();
            console.log(data);
            return { ...data, status };
          })
          .then(({ data }) => {
            console.log(data);
            if (data)
              appChange({
                tomesPopulars: data?.map((item) => ({
                  ...item,
                  select: false,
                })),
              });
            setLoadingPopulars(false);
          });
        fetch(bookByTomeBuyed(), {
          headers,
        })
          .then(async (res) => {
            const status = res.status;
            const data = await res.json();
            return { ...data, status };
          })
          .then(({ data }) => {
            console.log(data);
            if (data)
              appChange({
                tomesMostBuyed: data?.map((item) => ({
                  ...item,
                  select: false,
                })),
              });
            setLoadingBuyed(false);
          });
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, [navigation]);

  return (
    <Layout
      title={"Buku"}
      navigation={navigation}
      userExist={true}
      progress={100}
      homeScreen={false}
    >
      <View
        // loader for get tomes
        style={{ width: "100%" }}
      >
        {loadingTomes && (
          <ActivityIndicator color={theme.colors.brand.secondary} />
        )}
      </View>
      <ScrollView horizontal={true} style={{ paddingHorizontal: 5 }}>
        <NoData horizontal items={tomes} />
        {tomes?.map(({ attributes, id }) => (
          <CardBook {...attributes} id={id} key={id} navigation={navigation} />
        ))}
      </ScrollView>
      <ProgressBarBook items={tomes} />
      <View
        // loader for get categories
        style={{ width: "100%" }}
      >
        {loading && <ActivityIndicator color={theme.colors.brand.secondary} />}
      </View>
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
      <ProgressBarBook items={tomes} />
      <View
        // loader for get tomes preferences
        style={{ width: "100%" }}
      >
        {loadingPreferences && (
          <ActivityIndicator color={theme.colors.brand.secondary} />
        )}
      </View>
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
        {tomesPreferences?.map(({ id, ...attributes }, index) => (
          <CardBook
            {...attributes}
            id={id}
            key={`${id + index}`}
            navigation={navigation}
          />
        ))}
      </ScrollView>
      <ProgressBarBook items={tomesPreferences} />
      <View
        // loader for get tomes preferences
        style={{ width: "100%" }}
      >
        {loadingBuyed && (
          <ActivityIndicator color={theme.colors.brand.secondary} />
        )}
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Meilleurs ventes</Text>
        <TouchableOpacity
          activeOpacity={TOUCHABLEOPACITY}
          onPress={() => {
            appChange({ currentPage: { name: "Meilleurs ventes", id: -2 } });
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
        <NoData horizontal items={tomesMostBuyed} />
        {tomesMostBuyed?.map(({ id, ...attributes }, index) => (
          <CardBook
            {...attributes}
            id={id}
            key={`${id + index}`}
            navigation={navigation}
          />
        ))}
      </ScrollView>
      <ProgressBarBook items={tomesPopulars} />

      <View
        // loader for get tomes preferences
        style={{ width: "100%" }}
      >
        {loadingPopulars && (
          <ActivityIndicator color={theme.colors.brand.secondary} />
        )}
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Les plus vues</Text>
        <TouchableOpacity
          activeOpacity={TOUCHABLEOPACITY}
          onPress={() => {
            appChange({ currentPage: { name: "Les plus vues", id: 0 } });
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
        <NoData horizontal items={tomesPopulars} />
        {tomesPopulars?.map(({ id, ...attributes }, index) => (
          <CardBook
            {...attributes}
            id={id}
            key={`${id + index}`}
            navigation={navigation}
          />
        ))}
      </ScrollView>
      <ProgressBarBook items={tomesPopulars} />
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
