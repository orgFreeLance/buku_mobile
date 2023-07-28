import { Box, Flex, Text, View, Center } from "native-base";
import React from "react";
import Header1 from "../componenents/organisms/Header1";
import { width } from "../constants/nativeSizes";
import CardPieces from "../componenents/molecules/CardPieces";
import StaggerMenu from "../componenents/molecules/StaggerMenu";

const pieceOne = require("../../assets/piece-one.png");
const pieceThree = require("../../assets/piece-three.png");
const pieceFive = require("../../assets/piece-five.png");
const pieceTen = require("../../assets/piece-ten.png");

const Configs = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <Flex>
        <Box
          style={{
            paddingHorizontal: width(5),
          }}>
          <Header1 />
        </Box>
        <Center>
          <Text fontFamily={"Poppins-Bold"} fontSize={20}>
            Rechargez votre compte
          </Text>
        </Center>
        <Flex
          direction="row"
          marginTop={4}
          flexWrap={"wrap"}
          paddingX={width(5)}
          justifyContent={"space-between"}>
          <Flex>
            <CardPieces
            navigation={navigation}
              image={pieceOne}
              title={"1$"}
              subtitle={"1 pièce"}
              description={"1 tentative + 1 Billet"}
            />

            <CardPieces
            navigation={navigation}
              image={pieceFive}
              title={"5$"}
              subtitle={"3 pièces"}
              description={"3 tentative + 2 Billets"}
              marginTop={true}
            />
          </Flex>
          <Flex marginLeft={4}>
            <CardPieces
            navigation={navigation}
              image={pieceThree}
              title={"3$"}
              subtitle={"2 pièces"}
              description={"2 tentative + 1 Billet"}
            />
            <CardPieces
            navigation={navigation}
              image={pieceTen}
              title={"10$"}
              subtitle={"5 pièce"}
              description={"5 tentative + 4 Billets"}
              marginTop={true}
            />
          </Flex>
        </Flex>
        <Flex paddingX={width(5)} marginTop={4}>
          <Box>
            <Text fontFamily={"Poppins-Regular"} fontSize={10}>
              PS: Les tentatives font référence au nombre de fois que vous
              pouvez vérifier vos résultats et les billet c’est vous donner
              accès l’event, vous et vos éventuels invités.
            </Text>
          </Box>
          <Box  marginTop={4} >
            <Text fontFamily={"Poppins-Regular"} fontSize={10}>
              En cliquant sur Suivant vous avez lu nos Conditions générales de
              vente
            </Text>
          </Box>
        </Flex>
        <StaggerMenu navigation={navigation} />
      </Flex>
    </View>
  );
};

export default Configs;
