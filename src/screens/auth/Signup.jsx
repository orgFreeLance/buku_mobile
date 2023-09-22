import {
  Text,
  FormControl,
  Input,
  Stack,
  StatusBar,
  View,
  useToast,
} from "native-base";
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
        title={"Créer un compte"}
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
          <View style={{ width: "100%", flex: 1, paddingBottom: 20 }}>
            <Text>
              Entrez votre nom d'utilisateur et votre mot de passe, si vous les
              avez oubliés. il faut alors faire "mot de passe oublié".
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
                  <FormControl.Label>Nom complet</FormControl.Label>
                  <Input
                    style={{ paddingHorizontal: 10 }}
                    type="text"
                    placeholder="Nom complet"
                  />
                </Stack>
                <Stack style={{ marginBottom: 10 }}>
                  <FormControl.Label>Numero de téléphone</FormControl.Label>

                  <Input placeholder="Numero de téléphone" />
                  <FormControl.HelperText>
                    Doit comporter au moins 10 caractères.
                  </FormControl.HelperText>
                  <FormControl.ErrorMessage>
                    Au moins 10 caractères sont requis.
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>
            </View>
          </View>
        </View>
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
