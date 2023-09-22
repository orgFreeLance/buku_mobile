import { Text, FormControl, Input, Stack, View, useToast } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AuthForm from "../../componenents/organisms/AuthForm";
import { shallow } from "zustand/shallow";
import userStore from "../../store/user";
import ButtonMain from "../../components/global/button/main";
import goTo from "../../utils/goTo";

const CodeOtp = ({ navigation }) => {
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
      <AuthForm
        title={"Il y a un sms pour vous"}
        navigation={navigation}
        userExist={true}
        progress={25}
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
              Nous avons envoyé le code de vérification OTP à votre numéro de
              téléphone et entrez le code ci-dessous.
            </Text>
            <View
              style={{
                paddingVertical: 15,
                width: "100%",
                marginTop: 10,
              }}
            >
              <FormControl
                isRequired
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Stack
                  style={{
                    width: 50,
                    marginBottom: 10,
                  }}
                >
                  <Input type="text" defaultValue="0" />
                </Stack>
                <Stack
                  style={{
                    width: 50,
                    marginBottom: 10,
                  }}
                >
                  <Input type="text" defaultValue="0" />
                </Stack>
                <Stack
                  style={{
                    width: 50,
                    marginBottom: 10,
                  }}
                >
                  <Input type="text" defaultValue="0" />
                </Stack>
                <Stack
                  style={{
                    width: 50,
                    marginBottom: 10,
                  }}
                >
                  <Input type="text" defaultValue="0" />
                </Stack>
              </FormControl>
            </View>
          </View>
          <ButtonMain
            content="continue"
            onPress={() => {
              goTo(navigation, "Home");
            }}
          />
        </View>
      </AuthForm>
    </View>
  );
};

export default CodeOtp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContents: {},
});
