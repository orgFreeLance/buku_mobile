import { View, Text } from 'react-native'
import React from 'react'
import { Box, Image } from 'native-base';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { height, width } from '../../constants/nativeSizes';

const PubCarousel = ({activeDotIndex, pubs, setActiveDotIndex }) => {
    const renderItem = ({ item }) => {
        return (
          <View >
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
      <Box>
        <Carousel
          layout={"default"}
          data={pubs}
          renderItem={renderItem}
          sliderWidth={350}
          itemWidth={350}
          onSnapToItem={(index) => setActiveDotIndex(index)}
          loop={true}
          autoplay={true}
          autoplayDelay={1000}
          autoplayInterval={100}
          enableMomentum={false}
          lockScrollWhileSnapping={true}
        />
        <Pagination
          dotsLength={pubs.length}
          activeDotIndex={activeDotIndex}
          containerStyle={{
            marginTop: -height(6),
            marginBottom: 10,
            zIndex: 10,
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: "rgba(255, 255, 255, 0.92)",
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </Box>
    );
}

export default PubCarousel