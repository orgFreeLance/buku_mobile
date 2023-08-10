import { Image } from "expo-image";
import { View, Text, Box, Flex, StatusBar } from "native-base";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { height, width } from "../../constants/nativeSizes";
import theme from "../../constants/theme";
const backgroundImage = require("../../../assets/mainImage.png");
const logo = require("../../../assets/logo2.png");

const Splash = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={theme.colors.brand.main} />
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: "space-between",
          paddingTop: height(10),
          paddingBottom: height(5),
          paddingHorizontal: width(5),
        }}
        resizeMode="cover"
        source={backgroundImage}>
        <Box>
          <Image
            style={{ width: "100%", height: 50 }}
            source={logo}
            contentFit="contain"
            transition={1000}
          />
        </Box>
        <Flex>
          <Box paddingY={height(2)}>
            <Box>
              <Text style={styles.mainTitle}>
                Consultez et partagez vos résultats avec plus de fun !
              </Text>
            </Box>
          </Box>
        </Flex>
      </ImageBackground>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  mainTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
  },
});
