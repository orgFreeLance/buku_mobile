import { Box, Flex, Image, StatusBar, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import theme from "../constants/theme";
import Header1 from "../componenents/organisms/Header1";
import { height, width } from "../constants/nativeSizes";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useState } from "react";
import PubCarousel from "../componenents/molecules/PubCarousel";

const Home = () => {
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
        <Header1 />
        <Flex>
          <PubCarousel
            activeDotIndex={activeDotIndex}
            pubs={pubs}
            setActiveDotIndex={setActiveDotIndex}
          />
          <Box>
            <Flex>
              <Text>Left Column</Text>
            </Flex>
            <Flex>
              <Text>Right Column</Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width(5),
  },
  mainContents: {},
});
