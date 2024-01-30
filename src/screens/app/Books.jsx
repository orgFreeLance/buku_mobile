import { View } from "native-base";
import CardBook from "../../components/global/card/book";
import { useEffect, useState } from "react";
import { headers } from "../../constants";
import appStore from "../../store/app";
import { getTomesBuyedURL, getTomesFavoritesURL } from "../../constants/url";
import LayoutBooks from "../../layouts/organisms/LayoutBooks";
import PageLoading from "../../components/global/loading";
import userStore from "../../store/user";
import Error from "../../components/global/error";
import NoData from "../../components/global/noData";

const Books = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const { tomesFavorites, tomesBuyed, bookOfChoice, appChange } = appStore()
  const [refresh, setRefresh] = useState(0)
  const [error, setError] = useState(false)
  const { id } = userStore()
  const onRefresh = () => {
    setRefresh(state => state + 1)
  }
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
          setLoading(false)
          setError(true)
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
          setError(true)
          setLoading(false)
        })
        break;
    }
  }, [bookOfChoice, refresh])

  return (
    <LayoutBooks
      title={"Mes Livres"}
      navigation={navigation}
      userExist={true}
      progress={100}
      bookScreen={false}>
      {!error ? <>
        <PageLoading horizontal={false} loading={loading}>
          <View style={{ width: "100%", flex: 1, flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }}>
            {(bookOfChoice.id == "Achetés") ?
              <>
                <NoData items={tomesBuyed} />
                {tomesBuyed.map(({ id, ...attributes }, index) => <CardBook {...attributes} id={id} key={`${id}${index}`} horizontal={false} navigation={navigation} />)}
              </> :
              <>
                <NoData items={tomesFavorites} />
                {tomesFavorites.map(({ id, attributes }, index) => <CardBook {...attributes} id={id} key={`${id}${index}`} horizontal={false} navigation={navigation} />)}
              </>
            }
          </View>
        </PageLoading>
      </> :
        <>
          <Error refresh={onRefresh} />
        </>
      }
    </LayoutBooks>
  );
};

export default Books;

