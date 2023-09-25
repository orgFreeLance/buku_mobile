import { View, Text } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AuthForm from "../../componenents/organisms/AuthForm";
import userStore from "../../store/user";
import { shallow } from "zustand/shallow";
import { useToast } from "native-base";
import ButtonMain from "../../components/global/button/main";
import goTo from "../../utils/goTo";
import CardAge from "../../components/global/card/age";

const Age = ({ navigation }) => {
  const toast = useToast();
  const [logUser, isAuth] = userStore(
    (state) => [state.logUser, state.isAuth],
    shallow
  );
  const [ages, setAges] = useState([
    { content: "0 - 10", select: true },
    { content: "11 - 13", select: false },
    { content: "14 - 17", select: false },
    { content: "18 - 24", select: false },
    { content: "25 - 29", select: false },
    { content: "30 - 34", select: false },
    { content: "35 - 39", select: false },
    { content: "40 - 44", select: false },
    { content: "45 - 49", select: false },
    { content: ">= 50", select: false },
  ]);
  const onPress = (current) => {
    setAges((state) => {
      return state.map((item, index) => {
        if (current == index) return { ...item, select: true };
        return { ...item, select: false };
      });
    });
  };

  return (
    <View style={styles.container}>
      <AuthForm
        title={"Choisissez votre âge "}
        navigation={navigation}
        progress={40}
      >
        <View
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "100%", paddingBottom: 10 }}>
            <Text>Sélectionnez une tranche d'âge pour un meilleur contenu</Text>
            <View
              style={{
                paddingVertical: 15,
                height: 50,
                width: "100%",
                marginTop: 10,
              }}
            >
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                {ages.map(({ content, select }, index) => (
                  <CardAge
                    content={content}
                    onPress={onPress}
                    select={select}
                    index={index}
                    key={index}
                  />
                ))}
              </View>
            </View>
          </View>
          <ButtonMain
            content="continue"
            onPress={() => {
              goTo(navigation, "Category");
            }}
          />
        </View>
      </AuthForm>
    </View>
  );
};

export default Age;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
