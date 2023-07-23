import { Center, Flex, Input, StatusBar, View, useToast } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import CTAContainer from "../../componenents/organisms/CTAContainer";
import AuthForm from "../../componenents/organisms/AuthForm";
import theme from "../../constants/theme";
import { submitForm } from "../../utils/sbmitAuth";
import { shallow } from "zustand/shallow";
import userStore from "../../store/user";

const VerifyCode = ({ navigation }) => {
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
        title={"Confirmation numéro"}
        navigation={navigation}
        userExist={false}
        isVerification={true}>
        <Center display={"flex"} style={{ flexDirection: "row" }}>
          <Input
            onChangeText={(value) => {
              setFirstName(value);
            }}
            backgroundColor={theme.colors.brand[500]}
            type="text"
            variant="filled"
            size="md"
            isRequired
            w={{
              base: 50,
              md: 50,
            }}
          />
          <Input
            onChangeText={(value) => {
              setLastName(value);
            }}
            backgroundColor={theme.colors.brand[500]}
            type="text"
            variant="filled"
            size="md"
            isRequired
            w={{
              base: 50,
              md: 50,
            }}
          />
          <Input
            onChangeText={(value) => {
              setPhone(value);
            }}
            backgroundColor={theme.colors.brand[500]}
            type="text"
            variant="filled"
            size="md"
            isRequired
            w={{
              base: 50,
              md: 50,
            }}
          />
          <Input
            onChangeText={(value) => {
              setEmail(value);
            }}
            backgroundColor={theme.colors.brand[500]}
            type="text"
            variant="filled"
            size="md"
            isRequired
            w={{
              base: 50,
              md: 50,
            }}
          />
        </Center>
      </AuthForm>
      <CTAContainer
        onPress={() => {
          submitForm(
            false,
            setIsloading,
            signupUser,
            isAuth,
            toast,
            phone,
            password,
            firstName,
            lastName,
            email
          );
        }}
        text={"Confirmer"}
        isLoading={isLoading}
      />
    </View>
  );
};

export default VerifyCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputNumber: {
    width: 50,
    height: 50,
  },
});
