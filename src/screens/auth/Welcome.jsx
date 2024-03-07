import { StatusBar, View } from "native-base";
import React from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";
import theme from "../../constants/theme";
import { height, width } from "../../constants/nativeSizes";
import ButtonMain from "../../components/global/button/main";
import goTo from "../../utils/goTo";
import ButtonSecondary from "../../components/global/button/secondary";
import ProgressSmall from "../../components/global/progress/small";
const bg = require("../../../assets/welcome/bg.png");

const Welecome = ({ navigation }) => {
  const routes = navigation.getState()?.routes;
  console.log(routes);
  const prevRoute = routes[routes.length - 2];
  console.log(prevRoute);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.colors.brand.secondary} />
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: height(5),
          paddingHorizontal: width(3),
        }}
        resizeMode="cover"
        source={bg}
      >
        <View
          style={{
            flex: 1,
          }}
        ></View>
        <View
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 100,
          }}
        >
          <View
            style={{
              paddingVertical: 10,

              width: "100%",
            }}
          >
            <View
              style={{
                paddingVertical: 15,
                justifyContent: "space-center",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  fontSize: 40,
                }}
              >
                Bienvenue chez
              </Text>
              <Text
                style={{
                  paddingHorizontal: 10,
                  paddingLeft: 3,
                  fontWeight: "bold",
                  fontSize: 40,
                  color: theme.colors.brand.secondary,
                }}
              >
                BUKU
              </Text>
            </View>
            <Text
              style={{
                textAlign: "center",
                paddingBottom: 10,
                paddingHorizontal: width(3),
                fontWeight: 400,
              }}
            >
              Votre bibliotheque de poche, en
              <Text style={{ fontWeight: "600" }}>
                {" "}
                République démocratique du congo
              </Text>
            </Text>
          </View>
          <ProgressSmall current={0} />
          <ButtonMain
            content="Je créé un compte"
            onPress={() => {
              goTo(navigation, "Gender");
            }}
          />
          <ButtonSecondary
            content="J'ai déja un compte"
            onPress={() => {
              goTo(navigation, "Login");
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welecome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContents: {},
});
