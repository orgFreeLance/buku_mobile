import { Text, View } from "native-base";
import { ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, AntDesign } from '@expo/vector-icons';
import theme from "../../constants/theme";
import Layout from "../../layouts/organisms/Layout";
import CardBook from "../../components/global/card/book";
import CardGender from "../../components/global/card/genre";
import { API_LINK, TOUCHABLEOPACITY, headers } from "../../constants";
import goTo from "../../utils/goTo";
import appStore from "../../store/app";
import { useEffect, useState } from "react";
import { categoriesURl, tomesURl } from "../../constants/url";
import ProgressBarBook from "../../components/global/progressBar";

const Home = ({ navigation }) => {
  const { categories, tomes, appChange } = appStore()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const category = await fetch(`${API_LINK}${categoriesURl}`, { headers }).then(async res => {
          const status = res.status
          const data = await res.json()
          return ({ ...data, status })
        })
        const tome = await fetch(`${API_LINK}${tomesURl}`, { headers }).then(async res => {
          const status = res.status
          const data = await res.json()
          return ({ ...data, status })
        })
        appChange({ categories: category.data.map((item) => ({ ...item, select: false })), tomes: tome.data.map((item) => ({ ...item, select: false })) })
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    })()

  }, [])
  return (
    <Layout
      title={"Buku"}
      navigation={navigation}
      userExist={true}
      progress={100}
      homeScreen={false}
    >
      <View style={{ width: "100%", height: 200, backgroundColor: "red" }}>
        {loading && <ActivityIndicator color={theme.colors.brand.secondary} />}
      </View>
      <ScrollView horizontal={true} style={{ paddingHorizontal: 5 }} >
        {tomes.map(({ attributes, id }) => <CardBook {...attributes} id={id} key={id} navigation={navigation} />)}
      </ScrollView>
      <ProgressBarBook items={tomes} />
      <View style={styles.header}>
        <Text style={styles.title}>
          Explorer par genre
        </Text>
        <TouchableOpacity activeOpacity={TOUCHABLEOPACITY} onPress={() => goTo(navigation, "Genre")}>
          <AntDesign name="arrowright" size={20} color={theme.colors.brand.secondary} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} onScrollBeginDrag={(e) => {
        console.log(e)
        console.log(e.target)
      }}>
        {categories.map(({ attributes, id }) => <CardGender {...attributes} id={id} key={id} navigation={navigation} />)}
      </ScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>Recommandé pour vous</Text>
        <TouchableOpacity activeOpacity={TOUCHABLEOPACITY} onPress={() => {
          appChange({ currentPage: { name: "Recommandé pour vous", id: -1 } })
          goTo(navigation, "BookByGenre")
        }}>
          <AntDesign name="arrowright" size={20} color={theme.colors.brand.secondary} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} style={{ paddingHorizontal: 5 }} >
        {tomes.map(({ attributes, id }) => <CardBook {...attributes} id={id} key={id} navigation={navigation} />)}
      </ScrollView>
      <ProgressBarBook items={tomes} />
      <View style={styles.header}>
        <Text style={styles.title}>Meilleurs ventes</Text>
        <TouchableOpacity activeOpacity={TOUCHABLEOPACITY} onPress={() => {
          appChange({ currentPage: { name: "Meilleurs ventes", id: 0 } })
          goTo(navigation, "BookByGenre")
        }}>
          <AntDesign name="arrowright" size={20} color={theme.colors.brand.secondary} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} style={{ paddingHorizontal: 5 }} >
        {tomes.map(({ attributes, id }) => <CardBook {...attributes} id={id} key={id} navigation={navigation} />)}
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
    color: "black"
  },
  mainContents: {},
});
