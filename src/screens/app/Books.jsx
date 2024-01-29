import { View } from "native-base";
import { StyleSheet } from "react-native";
import CardBook from "../../components/global/card/book";
import { useEffect, useState } from "react";
import { headers } from "../../constants";
import appStore from "../../store/app";
import { getTomesBuyedURL, getTomesFavoritesURL, tomesURl } from "../../constants/url";
import LayoutBooks from "../../layouts/organisms/LayoutBooks";
import PageLoading from "../../components/global/loading";
import userStore from "../../store/user";

const Books = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const { tomesFavorites, tomesBuyed, bookOfChoice, appChange } = appStore()
  const { id } = userStore()
  useEffect(() => {
    setLoading(true)
    switch (bookOfChoice?.id) {
      case "Achetés":
        fetch(`${getTomesBuyedURL(id)}`, { headers }).then(async res => {
          const status = res.status
          const data = await res.json()
          return ({ ...data, status })
        }).then(({ data, status }) => {
          setLoading(false)
          if (status == 200) {
            appChange({ tomesBuyed: data.map((item) => ({ ...item, select: false })) })
          }
        }).catch((error) => {
          console.log(error)
          setLoading(false)
        })
        break;
      case "Favoris":
        fetch(`${getTomesFavoritesURL(id)}`, { headers }).then(async res => {
          const status = res.status
          const data = await res.json()
          return ({ ...data, status })
        }).then(({ data, status }) => {
          setLoading(false)
          if (status == 200) {
            appChange({ tomesFavorites: data.map((item) => ({ ...item.attributes.tome.data, select: false })) })
          }
        }).catch((error) => {
          setLoading(false)
        })
        break;
    }


  }, [bookOfChoice])

  return (
    <LayoutBooks
      title={"Mes Livres"}
      navigation={navigation}
      userExist={true}
      progress={100}
      bookScreen={false}>
      <PageLoading horizontal={false} loading={loading}>
        <View style={{ width: "100%", flex: 1, flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }}>
          {(bookOfChoice.id == "Favoris") ?
            <>
              {tomesFavorites.map(({ id, attributes }, index) => <CardBook {...attributes} id={id} key={`${id}${index}`} horizontal={false} navigation={navigation} />)}
            </> :
            <>
              {tomesBuyed.map(({ id, ...attributes }, index) => <CardBook {...attributes} id={id} key={`${id}${index}`} horizontal={false} navigation={navigation} />)}
            </>
          }
        </View>
      </PageLoading>

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
