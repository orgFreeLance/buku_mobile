import { Text, FormControl, Input, Stack, View, useToast } from "native-base";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AuthForm from "../../componenents/organisms/AuthForm";
import { shallow } from "zustand/shallow";
import userStore from "../../store/user";
import ButtonMain from "../../components/global/button/main";
import goTo from "../../utils/goTo";
import theme from "../../constants/theme";

const Login = ({ navigation }) => {
  const toast = useToast();
  //Add Inputs elements here
  const { userChange } = userStore();

  return (
    <View style={styles.container}>
      <AuthForm
        title={"Bonjour à tous"}
        navigation={navigation}
        userExist={true}
        progress={100}
      >
        <View
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "100%", flex: 1 }}>
            <Text>
              Veuillez saisir votre numéro de téléphone et votre mot de passe
              pour vous connecter.
            </Text>
            <View
              style={{
                paddingVertical: 15,
                width: "100%",
                marginTop: 10,
              }}
            >
              <FormControl isRequired>
                <Stack style={{ marginBottom: 10 }}>
                  <FormControl.Label>Numero de téléphone</FormControl.Label>
                  <Input
                    style={{ paddingHorizontal: 10 }}
                    type="text"
                    placeholder="Numero de téléphone"
                  />
                  <FormControl.HelperText>
                    Doit comporter au moins 10 caractères.
                  </FormControl.HelperText>
                  <FormControl.ErrorMessage>
                    Au moins 10 caractères sont requis.
                  </FormControl.ErrorMessage>
                </Stack>
                <Stack style={{ marginBottom: 10 }}>
                  <FormControl.Label>Mot de passe</FormControl.Label>
                  <Input type="password" placeholder="Mot de passe" />
                  <FormControl.HelperText>
                    Doit comporter au moins 7 caractères.
                  </FormControl.HelperText>
                  <FormControl.ErrorMessage>
                    Au moins 7 caractères sont requis.
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  width: "100%",
                  height: 100,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    textAlign: "center",
                    paddingTop: 25,
                    color: theme.colors.brand.secondary,
                  }}
                  onPress={() => {
                    goTo(navigation, "Forgot");
                  }}
                >
                  Mot de passe oublié
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <ButtonMain
            content="Connecte toi"
            onPress={() => {
              userChange({ isAuth: true })
              goTo(navigation, "Home");
            }}
          />
        </View>
      </AuthForm>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContents: {},
});
