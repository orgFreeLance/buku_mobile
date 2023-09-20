import { Image } from "expo-image";
import { View, Box, StatusBar } from "native-base";
import React, { useEffect } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { height, width } from "../../constants/nativeSizes";
import goTo from "../../utils/goTo";
import theme from "../../constants/theme";
const backgroundImage = require("../../../assets/white.jpeg");
const logo = require("../../../assets/logo.png");

const Start = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      goTo(navigation, "Welcome");
    }, 3000);
  }, [navigation]);
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={theme.colors.brand.secondary} />
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: height(10),
          paddingBottom: height(5),
          paddingHorizontal: width(5),
        }}
        resizeMode="cover"
        source={backgroundImage}
      >
        <Box
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            style={{ width: 400, height: 130 }}
            source={logo}
            contentFit="contain"
            transition={1000}
          />
        </Box>
      </ImageBackground>
    </View>
  );
};

export default Start;
