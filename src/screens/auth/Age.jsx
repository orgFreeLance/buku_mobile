import { View, Text } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AuthForm from "../../layouts/organisms/AuthForm";
import userStore from "../../store/user";
import { shallow } from "zustand/shallow";
import { useToast } from "native-base";
import ButtonMain from "../../components/global/button/main";
import goTo from "../../utils/goTo";
import CardAge from "../../components/global/card/age";
import appStore from "../../store/app";

const Age = ({ navigation }) => {
  const toast = useToast();

  const { age_ranges, appChange } = appStore()

  const onPress = (current) => {
    const setAges = ((state) => {
      return state.map((item, index) => {
        if (current == index) return { ...item, select: true };
        return { ...item, select: false };
      });
    });
    appChange({ age_ranges: setAges(age_ranges) })
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
                {age_ranges.map(({ name, select }, index) => (
                  <View style={{ marginTop: 5, marginRight: 5, borderRadius: 20, overflow: "hidden", width: "48%" }}
                    key={index}>
                    <CardAge
                      name={name}
                      onPress={onPress}
                      select={select}
                      index={index}
                      key={index}
                    />
                  </View>
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
