import { Box, Flex, Text, Center, Image } from "native-base";
import React from "react";
import { ImageBackground } from "react-native";
const pieceGold = require("../../../assets/piece-gold.png");

const CardPieces = ({ image, title, subtitle, description, marginTop }) => {
  return (
    <Box borderRadius={10} marginTop={marginTop ? 6 : 0}>
      <ImageBackground
        source={image}
        style={{
          width: 143,
          height: 199,
          display: "flex",
          justifyContent: "center",
          borderRadius: 10,
        }}>
        <Center>
          <Text fontFamily={"Poppins-Bold"} color={"#fff"} fontSize={48}>
            {title}
          </Text>
        </Center>
        <Flex direction="row" justifyContent={"center"} marginBottom={8}>
          <Image alt="One piece" source={pieceGold} />
          <Text
            marginLeft={2}
            fontFamily={"Poppins-Bold"}
            color={"#fff"}
            fontSize={15}>
            {subtitle}
          </Text>
        </Flex>
        <Center>
          <Text fontFamily={"Poppins-Regular"} color={"#fff"} fontSize={10}>
            {description}
          </Text>
        </Center>
      </ImageBackground>
    </Box>
  );
};

export default CardPieces;
