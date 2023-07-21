import { Box, Flex, Image, StatusBar, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import theme from "../constants/theme";
import Header1 from "../componenents/organisms/Header1";
import { height, width } from "../constants/nativeSizes";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useState } from "react";

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

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image
          style={{
            width: width(90),
            height: height(20),
            borderRadius: 9,
          }}
          source={{ uri: item.uri }}
          alt={item.title}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.brand.main}
        barsTyle={"light-content"}
      />
      <Flex>
        <Header1 />
        <Flex>
          <Box>
            <Carousel
              layout={"default"}
              data={pubs}
              renderItem={renderItem}
              sliderWidth={350}
              itemWidth={350}
              onSnapToItem={(index) => setActiveDotIndex(index)}
            />
            <Pagination
              dotsLength={pubs.length}
              activeDotIndex={activeDotIndex}
              containerStyle={{  marginTop: -height(6), marginBottom: 10, zIndex:10 }}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
                backgroundColor: "rgba(255, 255, 255, 0.92)",
              }}
              inactiveDotStyle={
                {
                  // Define styles for inactive dots here
                }
              }
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </Box>
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
