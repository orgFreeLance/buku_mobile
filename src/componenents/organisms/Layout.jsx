import {
  Flex,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "native-base";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome5, Foundation } from '@expo/vector-icons';
import { ImageBackground, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { screenHeight, width } from "../../constants/nativeSizes";
import theme from "../../constants/theme";
import goTo from "../../utils/goTo";
import userStore from "../../store/user";
import ModalMenu from "../../components/global/modal/menu";
import { OPACITY, TOUCHABLEOPACITY } from "../../constants";
const bg = require("../../../assets/white.jpeg");
const avatar = require("../../../assets/avatar.jpeg");

const Layout = ({ image = bg, navigation, children, accountScreen = true, homeScreen = true, settingScreen = true, coinScreen = true, fileScreen = true, title = "" }) => {
  const [account] = useState(accountScreen)
  const [home] = useState(homeScreen)
  const [file] = useState(fileScreen)
  const { phone_number, picture, } = userStore()
  const [modal, setModal] = useState(false)
  const [setting] = useState(settingScreen)
  const [coin] = useState(coinScreen)
  const { isAuth } = userStore()

  useEffect(() => {
    if (!isAuth) {
      // goTo(navigation, "Welcome")
    }
  }, [isAuth])

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
            <View>
              <Text style={styles.title}>
                {title}
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={TOUCHABLEOPACITY}
              onPress={() => setModal(true)}
            >
              <View style={{ position: "relative" }}>
                <View style={{
                  overflow: "hidden",
                  borderRadius: 50,
                  borderColor: "white",
                  borderWidth: 2,
                }}>
                  <ImageBackground source={picture ? { uri: picture } : avatar} style={styles.avatar} />
                </View>
                <View style={{ height: 15, width: 15, borderRadius: 20, borderWidth: 2, borderColor: "white", backgroundColor: "green", position: "absolute", top: 0, zIndex: 50, right: 0 }}></View>
              </View>
            </TouchableOpacity>
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
            <TouchableOpacity
              activeOpacity={TOUCHABLEOPACITY} onPress={() => {
                goTo(navigation, "Home")
              }}>
              <View style={!home ? styles.link : styles.link_hover} >
                <Foundation name="home" size={20} color={home ? "grey" : theme.colors.brand.secondary} />
                <Text color={home ? "grey" : theme.colors.brand.secondary} style={{ fontSize: 12, textTransform: "lowercase" }}>Accueil</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={TOUCHABLEOPACITY} onPress={() => {
                goTo(navigation, "Contract")
              }}>
              <View style={!file ? styles.link : styles.link_hover} >
                <FontAwesome5 name="file-contract" size={20} color={file ? "grey" : theme.colors.brand.secondary} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={TOUCHABLEOPACITY} onPress={() => {
                goTo(navigation, "coin")
              }}>
              <View style={!coin ? styles.link : styles.link_hover} >
                <Entypo name="wallet" size={20} color={coin ? "grey" : theme.colors.brand.secondary} />
              </View>
            </TouchableOpacity>
            <CardLinkFooter condition={account} navigation={navigation} page={"Coins"} text={"Pieces"} Icon={<FontAwesome5 name="coins" size={20} color={coin ? "grey" : theme.colors.brand.secondary} />} />
            <CardLinkFooter condition={account} navigation={navigation} page={"Account"} text={"Compte"} Icon={<Feather name="shopping-cart" size={20} color={account ? "grey" : theme.colors.brand.secondary} />} />
            <CardLinkFooter condition={setting} navigation={navigation} page={"Account"} text={"Compte"} Icon={<FontAwesome5 name="user" size={20} color={setting ? "grey" : theme.colors.brand.secondary} />} />
          </View>
        </View>
      </Flex >
    </View >
  );
};

export default Layout;
const CardLinkFooter = ({ Icon, text, condition, navigation, page }) => {
  return <TouchableOpacity
    activeOpacity={TOUCHABLEOPACITY} onPress={() => {
      goTo(navigation, page)
    }}>
    <View style={!condition ? styles.link : styles.link_hover} >
      {Icon}
      <Text color={condition ? "grey" : theme.colors.brand.secondary} style={{ fontSize: 12, textTransform: "lowercase" }}>{text}</Text>
    </View>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60, width: "100%",
    paddingHorizontal: width(5), flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "white"
  },
  avatar: {
    height: 50,
    width: 50,
    backgroundColor: theme.colors.brand.secondary,
    borderRadius: 50,
  },
  title: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: "700",
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