import { Input, StatusBar, View, useToast } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AuthForm from "../../componenents/organisms/AuthForm";
import theme from "../../constants/theme";
import { shallow } from "zustand/shallow";
import userStore from "../../store/user";

const Signup = ({ navigation }) => {
  const toast = useToast();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsloading] = useState(false);
  //Add Inputs elements here
  const [signupUser, isAuth] = userStore(
    (state) => [state.signupUser, state.isAuth],
    shallow
  );

  return (
    <View style={styles.container}>
      <StatusBar
        barsTyle={"light-content"}
        backgroundColor={theme.colors.brand.main}
      />
      <AuthForm
        title={"Informations du candidat"}
        navigation={navigation}
        userExist={true}
        progress={100}
      >
        <Input
          onChangeText={(value) => {
            setFirstName(value);
          }}
          backgroundColor={theme.colors.brand[500]}
          type="text"
          variant="filled"
          size="md"
          placeholder="Prénom*"
          isRequired
        />
        <Input
          onChangeText={(value) => {
            setLastName(value);
          }}
          backgroundColor={theme.colors.brand[500]}
          type="text"
          variant="filled"
          size="md"
          placeholder="Nom*"
          isRequired
        />
        <Input
          onChangeText={(value) => {
            setPhone(value);
          }}
          backgroundColor={theme.colors.brand[500]}
          type="text"
          variant="filled"
          size="md"
          placeholder="Phone*"
          isRequired
        />
        <Input
          onChangeText={(value) => {
            setEmail(value);
          }}
          backgroundColor={theme.colors.brand[500]}
          type="text"
          variant="filled"
          size="md"
          placeholder="E-mail*"
          isRequired
        />
        <Input
          onChangeText={(value) => {
            setPassword(value);
          }}
          backgroundColor={theme.colors.brand[500]}
          type="password"
          variant="filled"
          size="md"
          placeholder="Mot de passe*"
          isRequired
        />
        <Input
          onChangeText={(value) => {
            setPasswordConfirm(value);
          }}
          backgroundColor={theme.colors.brand[500]}
          type="password"
          variant="filled"
          size="md"
          placeholder="Confirmer Mot de passe*"
          isRequired
        />
      </AuthForm>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContents: {},
});
