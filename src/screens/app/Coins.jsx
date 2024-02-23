import { View } from "native-base";
import CardCoin from "../../components/global/card/coin";
import { useEffect } from "react";
import { activesCoinURL } from "../../constants/url";
import { headers } from "../../constants";
import appStore from "../../store/app";
import LayoutCoins from "../../layouts/organisms/LayoutCoins";
import NoData from "../../components/global/noData";

const Coins = ({ navigation }) => {
  const { appChange, coins, currencyOfCoins } = appStore()

  useEffect(() => {
    (async () => {
      try {
        const coins = await fetch(`${activesCoinURL()}`, { headers }).then(async res => {
          const status = res.status
          const data = await res.json()
          return ({ ...data, status })
        })
        if (coins.status == 200)
          appChange({ coins: coins.data })
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  return (
    <LayoutCoins
      title={"Pieces"}
      navigation={navigation}
      userExist={true}
      progress={100}
      coinScreen={false}
    >
      <View flex={1}>
        <NoData items={coins.filter(({ ...attributes }) => {
          const { id } = currencyOfCoins
          if (id == "Tout") return true
          else if (attributes?.currency?.id == id) return true
        })} />
        <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-between", flexWrap: "wrap", paddingVertical: 10 }}>
          {coins.filter(({ ...attributes }) => {
            const { id } = currencyOfCoins
            if (id == "Tout") return true
            else if (attributes?.currency?.id == id) return true
          }).map((item, index) => <CardCoin {...item} key={index} />)}
        </View>
      </View>
    </LayoutCoins>
  );
};

export default Coins;
