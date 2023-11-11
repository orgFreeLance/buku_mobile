import { View } from "native-base";
import { FontAwesome5 } from '@expo/vector-icons';
import { Text, StyleSheet } from "react-native";
import theme from "../../constants/theme";
import Layout from "../../layouts/organisms/Layout";
import userStore from "../../store/user";
import CardCoin from "../../components/global/card/coin";
import { useEffect } from "react";
import {  activesCoinURL } from "../../constants/url";
import { headers } from "../../constants";
import appStore from "../../store/app";

const Coins = ({ navigation }) => {
  const { userCoins } = userStore()
  const { appChange, coins } = appStore()
  const promises = [
    fetch(`${activesCoinURL()}`, { headers }).then(async res => {
      const status = res.status
      const data = await res.json()
      return ({ ...data, status })
    })]
  useEffect(() => {
    Promise.all(promises).then(([coins]) => {
      if (coins.status == 200)
        appChange({ coins: coins.data })
    })
  }, [])
  return (
    <Layout
      title={"Pieces"}
      navigation={navigation}
      userExist={true}
      progress={100}
      coinScreen={false}>
      <View style={{ backgroundColor: theme.colors.brand.secondary, paddingVertical: 15, paddingHorizontal: 5 }}>
        <Text style={{ fontSize: 48, fontWeight: "700", color: "white" }}>
          <FontAwesome5 name="coins" style={{ paddingRight: 5 }} size={40} color={"white"} />
          {` ${userCoins}`}
        </Text>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", paddingVertical: 10 }}>
        {coins.map((item, index) => <CardCoin {...item} key={index} />)}
      </View>
    </Layout>
  );
};

export default Coins;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContents: {},
});
