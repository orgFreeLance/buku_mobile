import { StatusBar, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import theme from "../../constants/theme";
import Layout from "../../layouts/organisms/Layout";
import CardBook from "../../components/global/card/book";
import { useEffect, useState } from "react";
import { API_LINK, headers } from "../../constants";
import appStore from "../../store/app";
import { tomesURl } from "../../constants/url";
import CardChoix from "../../components/global/card/choix";
import LayoutBooks from "../../layouts/organisms/LayoutBooks";

const Books = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const { tomes, appChange } = appStore()
  const [active, setActive] = useState("Achetés")
  useEffect(() => {
    fetch(`${API_LINK}${tomesURl}`, { headers }).then(async res => {
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
    <LayoutBooks
      title={"Mes Livres"}
      navigation={navigation}
      userExist={true}
      progress={100}
      bookScreen={false}>
     
      <View style={{ width: "100%", flex: 1, flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }}>
        {tomes.map(({ attributes, id }) => <CardBook {...attributes} id={id} key={id} horizontal={false} navigation={navigation} />)}
      </View>
    </LayoutBooks>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContents: {},
});
