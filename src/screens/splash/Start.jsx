import { Image } from "expo-image";
import { View, Text, Box, Flex, StatusBar } from "native-base";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { height, width } from "../../constants/nativeSizes";
import CTAButton from "../../componenents/atoms/CTAButtons";
import goTo from "../../utils/goTo";
import theme from "../../constants/theme";
import { SvgXml } from "react-native-svg";
import { logo } from "../../constants/svgs";
const backgroundImage = require("../../../assets/mainImage.png");

const Start = ({ navigation }) => {
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
        resizeMode='cover'
        source={backgroundImage}
      >
        <Box>
          <SvgXml xml={logo} />
        </Box>
        <Flex>
          <Box paddingY={height(2)}>
            <Box>
              <Text style={styles.mainTitle}>
                Consultez et partagez vos résultats avec plus de fun !
              </Text>
            </Box>
            <Box marginTop={height(0.5)}>
              <Text style={styles.stepsText}>
                1. Créez votre compte en remplissant quelques information ;
              </Text>
              <Text style={styles.stepsText}>
                2. Connectez-vous et replissez vos coordonnée d’EXETAT ;
              </Text>
              <Text style={styles.stepsText}>3. Rechargez du crédit ;</Text>
              <Text style={styles.stepsText}>4. Générez vos résultat;</Text>
              <Text style={styles.stepsText}>
                5. Capturez une photo ou une vidéo et choisissez votre filtre ;
              </Text>
              <Text style={styles.stepsText}>
                6. C’est parti, partagez vos résultats sur tous les réseaux
                sociaux
              </Text>
            </Box>
          </Box>
          <Box>
            <CTAButton
              text={"Commencer"}
              onPress={() => {
                goTo(navigation, "Signup");
              }}
              icon={true}
            />
          </Box>
        </Flex>
      </ImageBackground>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  mainTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 28,
    color: "#fff",
    lineHeight: 46,
  },
  stepsText: {
    color: "#fff",
    fontFamily: "Poppins-Regular",
    fontSize: 10,
  },
});
