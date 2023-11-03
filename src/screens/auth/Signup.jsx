import {
  Text,
  FormControl,
  Input,
  Stack,
  View,
  Image,
} from "native-base";
import React, { useState } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import AuthForm from "../../layouts/organisms/AuthForm";
import userStore from "../../store/user";
import ButtonMain from "../../components/global/button/main";
import { useForm, Controller } from "react-hook-form";
import ModalContainer from "../../components/global/modal/notification";
const signup_bg = require("../../../assets/notifications/signup.png");
import theme from "../../constants/theme";
import { API_LINK, headers } from "../../constants";
const Signup = ({ navigation }) => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false)
  const {
    pseudo,
    password,
    username,
    email,
    phoneNumber,
    gender,
    ageRange,
    confirmPassword,
    userChange
  } = userStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      pseudo,
      password,
      confirmPassword
    },
  });
  const closeModal = () => {
    setModal(false);
  };
  const signup = () => {
    const data = {
      pseudo,
      username,
      password,
      confirmPassword,
      phoneNumber,
      email,
      gender,
      ageRange,
    }
    setLoading(true)
    fetch(`${API_LINK}/authentification/register`, { headers, method: "POST", body: JSON.stringify({ data }) }).then(res => {
      return res.json()
    }).then(data => {
      setLoading(false)
      console.log(data)
    }).catch(err => {
      setLoading(false)
      console.log(err)
    })
  }
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
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    minLength: 2,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Stack style={{ marginBottom: 10 }}>
                      <FormControl.Label>Pseudo</FormControl.Label>
                      <Input

                        style={{ paddingHorizontal: 10 }}
                        type="text"
                        keyboardType="text"
                        placeholder="Pseudo"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />

                      {errors.pseudo ? (
                        <Text style={{ color: "red", fontSize: 10 }}>
                          Aux moins 2 caractères sont requis.
                        </Text>
                      ) : (
                        <Text>Doit comporter plus de 2 caractères.</Text>
                      )}
                    </Stack>
                  )}
                  name="pseudo"
                />
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    minLength: 2,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Stack style={{ marginBottom: 10 }}>
                      <FormControl.Label>Mot de passe</FormControl.Label>
                      <Input

                        style={{ paddingHorizontal: 10 }}
                        type="password"
                        keyboardType="text"
                        placeholder="Mot de passe"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />

                      {errors.password ? (
                        <Text style={{ color: "red", fontSize: 10 }}>
                          Aux moins 7 caractères sont requis.
                        </Text>
                      ) : (
                        <Text>Doit comporter plus de 6 caractères.</Text>
                      )}
                    </Stack>
                  )}
                  name="password"
                />
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    minLength: 2,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Stack style={{ marginBottom: 10 }}>
                      <FormControl.Label>Confirmer le mot de passe</FormControl.Label>
                      <Input

                        style={{ paddingHorizontal: 10 }}
                        type="confirmPassword"
                        keyboardType="text"
                        placeholder="Mot de passe"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />

                      {errors.confirmPassword ? (
                        <Text style={{ color: "red", fontSize: 10 }}>
                          Aux moins 7 caractères sont requis.
                        </Text>
                      ) : (
                        <Text>Doit comporter plus de 6 caractères.</Text>
                      )}
                    </Stack>
                  )}
                  name="confirmPassword"
                />
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
                  {!loading ? <>
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
                  </> :
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
                    </View>}
                </View>
              </>
            }
            closeModal={setModal}
          />
          <ButtonMain
            content="Inscrivez-vous"
            onPress={handleSubmit((data) => {
              userChange(data)
              signup()
              setModal(true);
            })}
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
