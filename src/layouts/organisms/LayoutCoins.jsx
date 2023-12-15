import {
  Flex,
  ScrollView,
  StatusBar,
} from "native-base";
import { useEffect, useState } from "react";
import { FontAwesome5, Foundation } from '@expo/vector-icons';
import {
  ImageBackground, StyleSheet,
  Text,
  View,
} from "react-native";
import { screenHeight, width } from "../../constants/nativeSizes";
import theme from "../../constants/theme";
import ModalMenu from "../../components/global/modal/menu";
import { OPACITY, headers } from "../../constants";
import CardLinkFooter from "../../components/global/card/linkFooter";
import userStore from "../../store/user";
import CardChoix from "../../components/global/card/choix";
import appStore from "../../store/app";
import { getCurrencies } from "../../constants/url";
const bg = require("../../../assets/white.jpeg");

const LayoutCoins = ({ image = bg, navigation, children, accountScreen = true, homeScreen = true, bookScreen = true, coinScreen = true, discoverScreen = true, title = "" }) => {
  const [account] = useState(accountScreen)
  const [home] = useState(homeScreen)
  const [discover] = useState(discoverScreen)
  const [book] = useState(bookScreen)
  const [coin] = useState(coinScreen)
  const [modal, setModal] = useState(false)
  const [all] = useState({ id: "Tout", attributes: { name: "Tout", symbol: "Tout" } })
  const [active, setActive] = useState("Tout")
  const { userCoins } = userStore()
  const { currencies, appChange } = appStore()
  useEffect(() => {
    (async () => {
      setActive("Tout")
      appChange({ currencies: [all] })
      try {
        const currencies = await fetch(`${getCurrencies()}`, { headers }).then(async res => {
          const status = res.status
          const data = await res.json()
          return ({ ...data, status })
        })
        if (currencies.status == 200)
          appChange({ currencies: [all, ...currencies.data] })
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  useEffect(() => { }, [])

  return (
    <View
      flex={1}
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <ModalMenu navigation={navigation} modal={modal} closeModal={() => setModal(false)} />
      <StatusBar backgroundColor={"white"} />
      <Flex flex={1} height={screenHeight}>
        <ImageBackground
          style={{
            flex: 1,
          }}
          resizeMode="cover"
          source={image}
        >
          <View style={styles.header}>
            <Text style={styles.title}>
              {title}
            </Text>
            <View style={{
              backgroundColor: theme.colors.brand.secondary,
              paddingVertical: 15,
              paddingHorizontal: 5,
              width: "100%",
            }}>
              <Text style={{ fontSize: 48, fontWeight: "700", color: "white" }}>
                <FontAwesome5 name="coins" style={{ paddingRight: 5 }} size={40} color={"white"} />
                {` ${userCoins}`}
              </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", paddingBottom: 5 }}>
              {currencies.map(({ attributes: { name, symbol }, id }) => <CardChoix key={name} width reverse name={symbol} active={active} onPress={() => {
                setActive(symbol)
                appChange({ currencyOfCoins: { attributes: { name, symbol }, id } })
              }} />)}
            </View>
          </View>
          <ScrollView
            flex={1}
            w="100%"
            mx="auto"
            paddingHorizontal={width(5)}
          >
            {children}
          </ScrollView>
        </ImageBackground>
        <View
          backgroundColor={"white"}
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <View
            elevation={5}
            backgroundColor={"white"}
            style={{
              paddingHorizontal: width(7),
              paddingVertical: width(3),
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              color: "white",
              shadowRadius: 50
            }}
          >
            <CardLinkFooter condition={home} navigation={navigation} screen={"Home"} text={"acceuil"} Icon={<Foundation name="home" size={20} color={home ? "grey" : theme.colors.brand.secondary} />} />
            <CardLinkFooter condition={discover} navigation={navigation} screen={"Discover"} text={"Découvertes"} Icon={<FontAwesome5 name="compass" size={20} color={discover ? "grey" : theme.colors.brand.secondary} />} />
            <CardLinkFooter condition={coin} navigation={navigation} screen={"Coins"} text={"Pieces"} Icon={<FontAwesome5 name="coins" size={20} color={coin ? "grey" : theme.colors.brand.secondary} />} />
            <CardLinkFooter condition={book} navigation={navigation} screen={"Books"} text={"Mes livres"} Icon={<Foundation name="book" size={20} color={book ? "grey" : theme.colors.brand.secondary} />} />
            <CardLinkFooter condition={account} navigation={navigation} screen={"Account"} text={"Compte"} Icon={<FontAwesome5 name="user" size={20} color={account ? "grey" : theme.colors.brand.secondary} />} />
          </View>
        </View>
      </Flex >
    </View >
  );
};

export default LayoutCoins;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    paddingHorizontal: width(5),
    paddingTop: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    height: 50,
    width: 50,
    backgroundColor: theme.colors.brand.secondary,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    paddingVertical: 5,
    color: "black"
  },
  link: {
    justifyContent: "center",
    padding: width(1),
    alignItems: "center",
  },
  link_hover: {
    justifyContent: "center",
    padding: width(1),
    alignItems: "center",
    opacity: OPACITY
  }
});
