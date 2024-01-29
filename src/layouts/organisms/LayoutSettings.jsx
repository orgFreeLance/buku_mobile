import {
  Flex,
  ScrollView,
  StatusBar,
} from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome5, Foundation, AntDesign, Ionicons } from '@expo/vector-icons';
import {
  ImageBackground, StyleSheet,
  Text,
  View,
} from "react-native";
import { screenHeight, width } from "../../constants/nativeSizes";
import theme from "../../constants/theme";
import ModalMenu from "../../components/global/modal/menu";
import { OPACITY, TOUCHABLEOPACITY } from "../../constants";
import CardLinkFooter from "../../components/global/card/linkFooter";
import goTo from "../../utils/goTo";
const bg = require("../../../assets/white.jpeg");

const LayoutSettings = ({ image = bg, navigation, children, accountScreen = true, homeScreen = true, bookScreen = true, coinScreen = true, discoverScreen = true, title = "" }) => {
  const [account] = useState(accountScreen)
  const [home] = useState(homeScreen)
  const [discover] = useState(discoverScreen)
  const [book] = useState(bookScreen)
  const [coin] = useState(coinScreen)
  const [modal, setModal] = useState(false)

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
            <TouchableOpacity
              activeOpacity={TOUCHABLEOPACITY}
              onPress={() => {
                navigation.goBack()
              }}
            >
              <Ionicons name="chevron-back-outline" size={26} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>
              {title}
            </Text>
            <TouchableOpacity
              activeOpacity={TOUCHABLEOPACITY}
              onPress={() => {
                goTo(navigation, "Search")
              }}
            >
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
              paddingVertical: width(2),
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

export default LayoutSettings;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    width: "100%",
    paddingHorizontal: width(5),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white"
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
