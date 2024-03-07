import { Flex, ScrollView, StatusBar, View } from "native-base";
import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground, StyleSheet } from "react-native";
import { screenHeight, width } from "../constants/nativeSizes";
import { TOUCHABLEOPACITY, routes } from "../constants";
const bg = require("../../assets/white.jpeg");

const LayoutRatings = ({ image = bg, navigation, children }) => {
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
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  style={styles.icon}
                  activeOpacity={TOUCHABLEOPACITY}
                  onPress={goBack}
                >
                  <Ionicons name="arrow-back-sharp" size={24} color="black" />
                </TouchableOpacity>
                <Text
                  style={{ fontWeight: "600", fontSize: 26, marginLeft: 5 }}
                >
                  Notes et commentaires
                </Text>
              </View>
              <TouchableOpacity
                style={styles.icon}
                activeOpacity={TOUCHABLEOPACITY}
              ></TouchableOpacity>
            </View>
            <ScrollView
              flex={1}
              w="100%"
              mx="auto"
              paddingHorizontal={width(5)}
              backgroundColor="green"
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

export default LayoutRatings;

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
    fontSize: 16,
    fontWeight: "500",
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
