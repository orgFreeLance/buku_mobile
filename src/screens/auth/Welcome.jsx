import { StatusBar, View, Box, Text } from "native-base";
import React, { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import theme from "../../constants/theme";
import userStore from "../../store/user";
import { shallow } from "zustand/shallow";
import { useToast } from "native-base";
import { height, width } from "../../constants/nativeSizes";
import ButtonMain from "../../components/global/button/main";
import goTo from "../../utils/goTo";
import ButtonSecondary from "../../components/global/button/secondary";
import ProgressSmall from "../../components/global/progress/small";
const bg = require("../../../assets/welcome/bg.png");

const Welecome = ({ navigation }) => {
  const toast = useToast();
  const [logUser, isAuth] = userStore(
    (state) => [state.logUser, state.isAuth],
    shallow
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.colors.brand.secondary} />
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: height(5),
          paddingHorizontal: width(5),
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
          <View style={{ paddingVertical: 10 }}>
            <Text
              style={{ paddingVertical: 15, fontWeight: "bold", fontSize: 40 }}
            >
              Bienvenue chez
              <Text
                style={{
                  paddingHorizontal: 10,
                  paddingLeft: 10,
                  color: theme.colors.brand.secondary,
                }}
              >
                {" "}
                BUKU
              </Text>
            </Text>
            <Text
              style={{
                textAlign: "center",
                paddingBottom: 10,
                paddingHorizontal: width(5),
                fontWeight: 400,
              }}
            >
              Le numéro Un de magasin de livre en
              <Text style={{ fontWeight: "600" }}> Ligne</Text> en
              <Text style={{ fontWeight: "600" }}>
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
