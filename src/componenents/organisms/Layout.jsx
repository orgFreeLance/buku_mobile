import {
  Flex,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "native-base";
import { FontAwesome5 } from '@expo/vector-icons';
import { ImageBackground, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { screenHeight, width } from "../../constants/nativeSizes";
import theme from "../../constants/theme";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import goTo from "../../utils/goTo";
import userStore from "../../store/user";
import ModalMenu from "../../components/global/modal/menu";
import { TOUCHABLEOPACITY } from "../../constants";
const bg = require("../../../assets/white.jpeg");
const avatar = require("../../../assets/avatar.jpeg");

const Layout = ({ image = bg, navigation, children, profilScreen = true, homeScreen = true, settingScreen = true, payrollScreen = true, fileScreen = true, title = "" }) => {
  const [profil] = useState(profilScreen)
  const [home] = useState(homeScreen)
  const [file] = useState(fileScreen)
  const { phoneNumber, picture, } = userStore()
  const [modal, setModal] = useState(false)
  const [setting] = useState(settingScreen)
  const [payroll] = useState(payrollScreen)
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
              paddingHorizontal: width(3),
              paddingVertical: width(2),
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
                <FontAwesome name="home" size={20} color={home ? "grey" : theme.colors.brand.secondary} />
                <Text color={home ? "grey" : theme.colors.brand.secondary} style={{ fontSize: 12 }}>Accueil</Text>
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
                goTo(navigation, "Payroll")
              }}>
              <View style={!payroll ? styles.link : styles.link_hover} >
                <Entypo name="wallet" size={20} color={payroll ? "grey" : theme.colors.brand.secondary} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={TOUCHABLEOPACITY} onPress={() => {
                goTo(navigation, "User")
              }}>
              <View style={!profil ? styles.link : styles.link_hover} >
                <FontAwesome name="user" size={20} color={profil ? "grey" : theme.colors.brand.secondary} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={TOUCHABLEOPACITY} onPress={() => {
                goTo(navigation, "Setting")
              }}>
              <View style={!setting ? styles.link : styles.link_hover} >
                <Feather name="more-horizontal" size={20} color={setting ? "grey" : theme.colors.brand.secondary} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Flex >
    </View >
  );
};

export default Layout;

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
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50
  },
  link_hover: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60
  }
});
