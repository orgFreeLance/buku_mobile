import { StatusBar, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import theme from "../constants/theme";
import Header1 from "../componenents/organisms/Header1";
import { height, width } from "../constants/nativeSizes";
import { useState } from "react";
import PubCarousel from "../componenents/molecules/PubCarousel";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SvgXml } from "react-native-svg";
import { eventsIcon, feedsIcon, resultIcon, shopsIcon } from "../constants/svgs";

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.brand.secondary}
        barsTyle={"light-content"}
      />
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContents: {},
});
