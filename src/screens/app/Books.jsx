import { StatusBar, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import theme from "../../constants/theme";
import Layout from "../../componenents/organisms/Layout";
import CardBook from "../../components/global/card/book";
import { useEffect, useState } from "react";
import { API_LINK, headers } from "../../constants";

const Books = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const { tomes, appChange } = appStore()
  useEffect(() => {
    fetch(`${API_LINK}/tomes?populate=*`, { headers }).then(async res => {
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
    })
  }, [])
  return (
    <Layout
      title={"Mes Livres"}
      navigation={navigation}
      userExist={true}
      progress={100}
      bookScreen={false}>
      <View style={{ width: "100%", flex: 1, flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }}>
        <CardBook horizontal={false} navigation={navigation} />
        <CardBook horizontal={false} navigation={navigation} />
        <CardBook horizontal={false} navigation={navigation} />
        <CardBook horizontal={false} navigation={navigation} />
        <CardBook horizontal={false} navigation={navigation} />
        <CardBook horizontal={false} navigation={navigation} />
        <CardBook horizontal={false} navigation={navigation} />
        <CardBook horizontal={false} navigation={navigation} />
        <CardBook horizontal={false} navigation={navigation} />
        <CardBook horizontal={false} navigation={navigation} />
        <CardBook horizontal={false} navigation={navigation} />
      </View>
    </Layout>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContents: {},
});
