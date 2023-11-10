import { Text, View } from "native-base";
import { ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import theme from "../../constants/theme";
import Layout from "../../layouts/organisms/Layout";
import CardBook from "../../components/global/card/book";
import CardGender from "../../components/global/card/genre";
import { API_LINK, TOUCHABLEOPACITY, headers } from "../../constants";
import goTo from "../../utils/goTo";
import appStore from "../../store/app";
import { useEffect, useState } from "react";
import { categoriesURl, tomeURl, tomesURl } from "../../constants/url";

const Home = ({ navigation }) => {
  const { categories, tomes, appChange } = appStore()
  const [loading, setLoading] = useState(true)
  const promises = [
    fetch(`${API_LINK}${categoriesURl}`, { headers }).then(async res => {
      const status = res.status
      const data = await res.json()
      return ({ ...data, status })
    }),
    fetch(`${API_LINK}${tomesURl}`, { headers }).then(async res => {
      const status = res.status
      const data = await res.json()
      return ({ ...data, status })
    })
  ]
  useEffect(() => {
    Promise.all(promises).then(([category, tome]) => {
      if (category.status == 200 && tome.status == 200) {
        appChange({ categories: category.data.map((item) => ({ ...item, select: false })), tomes: tome.data.map((item) => ({ ...item, select: false })) })
        goTo(navigation, "Welcome");
        setLoading(false)
      }
    }).then(error => {
      setLoading(false)
    })
  }, [])
  return (
    <Layout
      title={"Buku"}
      navigation={navigation}
      userExist={true}
      progress={100}
      homeScreen={false}>
      <ScrollView horizontal={true} style={{}}>
        {loading && <ActivityIndicator color={theme.colors.brand.secondary} />}
        {tomes.map(({ attributes, id }) => <CardBook {...attributes} id={id} key={id} navigation={navigation} />)}
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
        {categories.map(({ attributes, id }) => <CardGender {...attributes} id={id} key={id} navigation={navigation} />)}
      </ScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>Recommandé pour vous</Text>
        <TouchableOpacity activeOpacity={TOUCHABLEOPACITY} onPress={() => {
          appChange({ currentPage: { name: "Recommandé pour vous" } })
          goTo(navigation, "BookByGenre")
        }}>
          <Ionicons name="ios-arrow-forward-outline" size={20} color={theme.colors.brand.secondary} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} >
        {tomes.map(({ attributes, id }) => <CardBook {...attributes} id={id} key={id} navigation={navigation} />)}
      </ScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>Meilleurs ventes</Text>
        <TouchableOpacity activeOpacity={TOUCHABLEOPACITY} onPress={() => {
          appChange({ currentPage: { name: "Meilleurs ventes" } })
          goTo(navigation, "BookByGenre")
        }}>
          <Ionicons name="ios-arrow-forward-outline" size={20} color={theme.colors.brand.secondary} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} >
        {tomes.map(({ attributes, id }) => <CardBook {...attributes} id={id} key={id} navigation={navigation} />)}
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
