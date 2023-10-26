import {
  Text,
  FormControl,
  Input,
  Stack,
  View,
  useToast,
  Image,
} from "native-base";
import React, { useState } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import AuthForm from "../../layouts/organisms/AuthForm";
import { shallow } from "zustand/shallow";
import userStore from "../../store/user";
import ButtonMain from "../../components/global/button/main";
import ModalContainer from "../../components/global/modal/notification";
const signup_bg = require("../../../assets/notifications/signup.png");
import theme from "../../constants/theme";
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
                  style={{
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "center",
                    width: "100%",
                    flexWrap: "wrap",
                  }}
                >
                  <ImageViewer selectedImage={signup_bg} />
                  <Text
                    style={{
                      fontSize: 32,
                      fontWeight: "600",
                      paddingVertical: 10,
                      color: theme.colors.brand.secondary,
                    }}
                  >
                    Inscription réussie
                  </Text>
                  <Text
                    style={{ width: "80%", textAlign: "center", fontSize: 14 }}
                  >
                    votre compte a été créé. veuillez patienter un instant. nous
                    nous préparons à vous accueillir.
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignContent: "center",
                      justifyContent: "center",
                      width: "100%",
                      flexWrap: "wrap",
                      marginTop: 15,
                    }}
                  >
                    <ActivityIndicator
                      size="large"
                      color={theme.colors.brand.secondary}
                    />
                  </View>
                </View>
              </>
            }
            closeModal={setModal}
          />
          <ButtonMain
            content="Inscrivez-vous"
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
function ImageViewer({ selectedImage }) {
  return (
    <Image
      source={selectedImage}
      size={200}
      style={{
        width: 200,
      }}
      alt="image background"
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContents: {},
});
