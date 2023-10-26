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

const Home = ({ navigation }) => {
  const { categories, tomes, appChange } = appStore()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(`${API_LINK}/tomes?fields[0]=picture&fields[1]=name&fields[]=id&populate[0]=likes`, { headers }).then(async res => {
      const status = res.status
      const data = await res.json()
      return ({ ...data, status })
    }).then(({ data, status }) => {
      setLoading(false)
      if (status == 200) {
        appChange({ tomes: data.map((item) => ({ ...item, select: false })) })
      }
    }).catch(error => {
      setLoading(false)
      console.log(error)
    })
    if (categories.length == 0)
      fetch(`${API_LINK}/categories?fields[0]=picture&fields[1]=name&fields[2]=id`, { headers }).then(async res => {
        const status = res.status
        const data = await res.json()
        return ({ ...data, status })
      }).then(({ data, status }) => {
        setLoading(false)
        console.log(data)
        if (status == 200) {
          appChange({ categories: data.map((item) => ({ ...item, select: false })) })
        }
      }).catch(error => {
        setLoading(false)
      })
    console.log(categories)
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
