import { Text, FormControl, Input, Stack, View, useToast } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AuthForm from "../../componenents/organisms/AuthForm";
import { shallow } from "zustand/shallow";
import userStore from "../../store/user";
import ButtonMain from "../../components/global/button/main";
import goTo from "../../utils/goTo";
import Example from "../../components/global/modal/notification";
import ModalContainer from "../../components/global/modal/notification";

const Signup = ({ navigation }) => {
  const toast = useToast();
  const [modal, setModal] = useState(false);
  //Add Inputs elements here
  const [signupUser, isAuth] = userStore(
    (state) => [state.signupUser, state.isAuth],
    shallow
  );
  const closeModal = () => {
    setModal(false);
  };
  return (
    <View style={styles.container}>
      <AuthForm
        title={"Crée ton compte"}
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
                  <FormControl.Label>Pseudo</FormControl.Label>
                  <Input placeholder="Pseudo" />
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
                    Doit comporter au moins 10 caractères.
                  </FormControl.HelperText>
                  <FormControl.ErrorMessage>
                    Au moins 10 caractères sont requis.
                  </FormControl.ErrorMessage>
                </Stack>
                <Stack style={{ marginBottom: 10 }}>
                  <FormControl.Label>
                    Confirmer le mot de passe
                  </FormControl.Label>
                  <Input
                    type="password"
                    placeholder="Confirmer le mot de passe"
                  />
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
          <ModalContainer
            modal={modal}
            children={
              <>
                <View
                  style={{ width: "100%", height: 200, backgroundColor: "red" }}
                ></View>
              </>
            }
            closeModal={setModal}
          />
          <ButtonMain
            content="continue"
            onPress={() => {
              setModal(true);
            }}
          />
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
