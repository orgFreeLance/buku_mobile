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
import { ActivityIndicator, StyleSheet } from "react-native";
import AuthForm from "../../layouts/organisms/AuthForm";
import { shallow } from "zustand/shallow";
import userStore from "../../store/user";
import ButtonMain from "../../components/global/button/main";
import goTo from "../../utils/goTo";
import theme from "../../constants/theme";
import ModalContainer from "../../components/global/modal/notification";
const signup_bg = require("../../../assets/notifications/password.png");

const Password = ({ navigation }) => {
  const toast = useToast();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsloading] = useState(false);
  //Add Inputs elements here
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
        title={"Crée un nouveau mot de passe"}
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
            paddingBottom: 10,
          }}
        >
          <View style={{ width: "100%", flex: 1 }}>
            <Text>
              Entrez votre nouveau mot de passe si vous l'avez oublié. alors tu
              dois faire mot de passe oublié.
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
                  <FormControl.Label>Mot de passe</FormControl.Label>
                  <Input type="password" placeholder="Mot de passe" />
                  <FormControl.HelperText>
                    Doit comporter au moins 7 caractères.
                  </FormControl.HelperText>
                  <FormControl.ErrorMessage>
                    Au moins 7 caractères sont requis.
                  </FormControl.ErrorMessage>
                </Stack>
                <Stack style={{ marginBottom: 10 }}>
                  <FormControl.Label>
                    Confirmer le Mot de passe
                  </FormControl.Label>
                  <Input type="password" placeholder="Mot de passe" />
                  <FormControl.HelperText>
                    Doit comporter au moins 7 caractères.
                  </FormControl.HelperText>
                  <FormControl.ErrorMessage>
                    Au moins 7 caractères sont requis.
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
                      textAlign: "center",
                      lineHeight: 30,
                    }}
                  >
                    Réinitialisation du mot de passe réussie
                  </Text>
                  <Text
                    style={{ width: "80%", textAlign: "center", fontSize: 14 }}
                  >
                    votre mot de passe a été modifié avec succès
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
                    <ButtonMain
                      content="Aller à l'accueil"
                      onPress={() => {
                        goTo(navigation, "Login");
                      }}
                    />
                  </View>
                </View>
              </>
            }
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

export default Password;
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
