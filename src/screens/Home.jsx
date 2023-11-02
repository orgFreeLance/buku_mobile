<<<<<<< HEAD
import { StatusBar, Text, View } from "native-base";
import { StyleSheet } from "react-native";
=======
import { Box, Flex, StatusBar, Text, View } from "native-base";
import { StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native";
>>>>>>> fbf37147b99988978f7f318dfed95a706aa0183b
import theme from "../constants/theme";
import Header1 from "../componenents/organisms/Header1";
import { height, width } from "../constants/nativeSizes";
import { useState } from "react";
import PubCarousel from "../componenents/molecules/PubCarousel";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SvgXml } from "react-native-svg";
import { eventsIcon, feedsIcon, resultIcon, shopsIcon } from "../constants/svgs";

<<<<<<< HEAD
const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.brand.secondary}
        barsTyle={"light-content"}
      />
      <Text>Home</Text>
=======
const Home = ({ navigation }) => {
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const pubs = [
    {
      uri: "https://images.pexels.com/photos/17022826/pexels-photo-17022826/free-photo-of-luxe-feu-epice-reflet.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Coca",
      index: 0,
    },
    {
      uri: "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Fanta",
      index: 1,
    },
    {
      uri: "https://images.pexels.com/photos/17124942/pexels-photo-17124942/free-photo-of-mains-porter-publicite-section-mediane.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Zest",
      index: 0,
    },
    {
      uri: "https://images.pexels.com/photos/1677180/pexels-photo-1677180.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Fiesta",
      index: 2,
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.brand.main}
        barsTyle={"light-content"}
      />
      <Flex>
        <Box
          style={{
            paddingHorizontal: width(5),
          }}>
          <Header1 />
        </Box>
        <Flex>
          <Box
            style={{
              paddingHorizontal: width(5),
            }}>
            <PubCarousel
              activeDotIndex={activeDotIndex}
              pubs={pubs}
              setActiveDotIndex={setActiveDotIndex}
            />
          </Box>

          <LinearGradient
            colors={[theme.colors.brand[900], theme.colors.brand[800]]}
            style={{
              marginTop: height(10),
              borderTopLeftRadius: 250,
              paddingBottom: height(15),
            }}>
            <Flex direction="row" justifyContent={"center"}>
              <Flex marginRight={width(10)}>
                <TouchableOpacity
                  style={{
                    ...styles.iconContainer,
                    ...styles.topIconContainer,
                  }}
                  onPress={() => navigation.navigate("ResusltConfig")}>
                  <Box alignItems={"center"}> 
                    <SvgXml xml={resultIcon} />
                    <Text>Résultats</Text>
                  </Box>
                </TouchableOpacity>
                <Box style={styles.iconContainer}>
                <SvgXml xml={feedsIcon} />
                  <Text>Feeds</Text>
                </Box>
              </Flex>
              <Flex marginTop={-height(2)}>
                <Box
                  style={{
                    ...styles.iconContainer,
                    ...styles.topIconContainer,
                  }}>
                  <SvgXml xml={eventsIcon} />
                  <Text>Events</Text>
                </Box>
                <Box style={styles.iconContainer}>
                <SvgXml xml={shopsIcon} />
                  <Text>Shops</Text>
                </Box>
              </Flex>
            </Flex>
          </LinearGradient>
        </Flex>
      </Flex>
>>>>>>> fbf37147b99988978f7f318dfed95a706aa0183b
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
<<<<<<< HEAD
  mainContents: {},
=======
  iconContainer: {
    width: 130,
    height: 130,
    borderRadius: 17,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  topIconContainer: {
    marginBottom: 20,
  },
>>>>>>> fbf37147b99988978f7f318dfed95a706aa0183b
});
