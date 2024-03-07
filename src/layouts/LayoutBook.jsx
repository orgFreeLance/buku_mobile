import { Flex, ScrollView, StatusBar, View } from "native-base";
import { useState } from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { ImageBackground, StyleSheet } from "react-native";
import { screenHeight, width } from "../constants/nativeSizes";
import theme from "../constants/theme";
import ModalMenu from "../components/global/modal/menu";
import { TOUCHABLEOPACITY, routes } from "../constants";
const bg = require("../../assets/white.jpeg");

const LayoutBook = ({
  image = bg,
  navigation,
  children,
  loadingFavorite,
  createTomeFavorite,
  favory = false,
}) => {
  const [modal, setModal] = useState(false);
  const goBack = () => {
    const routesNav = navigation.getState()?.routes;
    const prevRoute = routesNav[routesNav.length - 2];
    const prevRouteExis = routes.find(({ name }) => name == prevRoute.name);
    if (prevRouteExis) navigation.goBack();
  };
  try {
    return (
      <View
        flex={1}
        style={{
          flex: 1,
          flexDirection: "column",
        }}
      >
        <ModalMenu
          navigation={navigation}
          modal={modal}
          closeModal={() => setModal(false)}
        />
        <StatusBar backgroundColor={"white"} hidden />
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
                style={styles.icon}
                activeOpacity={TOUCHABLEOPACITY}
                onPress={goBack}
              >
                <Ionicons name="arrow-back-sharp" size={28} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.icon}
                activeOpacity={TOUCHABLEOPACITY}
                onPress={() => {
                  createTomeFavorite();
                }}
              >
                {loadingFavorite && (
                  <ActivityIndicator
                    size="small"
                    color={theme.colors.brand.secondary}
                  />
                )}
                <MaterialIcons
                  name="favorite"
                  size={24}
                  color={!favory ? "black" : theme.colors.brand.secondary}
                />
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
        </Flex>
      </View>
    );
  } catch (error) {
    console.log(error);
  }
};

export default LayoutBook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    width: "100%",
    paddingHorizontal: width(5),
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  icon: {
    fontSize: 20,
    fontWeight: "700",
    color: "black",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 10,
    color: "black",
  },
  input: {
    borderRadius: 20,
    width: "85%",
    outLine: "none",
  },
});