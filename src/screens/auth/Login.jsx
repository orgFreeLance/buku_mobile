import { Text, FormControl, Input, Stack, View } from "native-base";
import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import AuthForm from "../../layouts/organisms/AuthForm";
import userStore from "../../store/user";
import ButtonMain from "../../components/global/button/main";
import goTo from "../../utils/goTo";
import theme from "../../constants/theme";
import ModalContainer from "../../components/global/modal/notification";
import { useForm, Controller } from "react-hook-form";
import { API_LINK, headers } from "../../constants";
import ImageViewer from "../../components/global/imageViewer";

const signup_bg = require("../../../assets/notifications/signup.png");
const signup_bg_success = require("../../../assets/notifications/signupSuccess.png");
const signup_bg_error = require("../../../assets/notifications/signupError.png");

const Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const { phoneNumber, password, userChange } = userStore();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumber,
      password,
    },
  });
  const closeModal = () => setModal(false);
  const login = (data) => {
    setLoading(true);
    fetch(`${API_LINK}/authentification/login`, {
      headers,
      method: "POST",
      body: JSON.stringify({ data }),
    })
      .then(async (res) => {
        const status = res.status;
        const data = await res.json();
        return { ...data, status };
      })
      .then(({ user: data, status, message }) => {
        setLoading(false);
        if (+status !== 200) {
          setMessage(message);
          setError(true);
          setModal(true);
        } else {
          userChange({ isAuth: true, ...data });
          goTo(navigation, "Home");
        }
      })
      .catch(({ message }) => {
        setLoading(false);
        setMessage(message);
        setModal(true);
        setError(true);
      });
  };
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
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    minLength: 9,
                    maxLength: 9,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Stack style={{ marginBottom: 10 }}>
                      <FormControl.Label>Numero de téléphone</FormControl.Label>
                      <Input
                        InputLeftElement={
                          <Text
                            style={{
                              paddingHorizontal: 5,
                              paddingVertical: 13,
                              backgroundColor: "white",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            +243
                          </Text>
                        }
                        style={{ paddingHorizontal: 10 }}
                        type="text"
                        keyboardType={"numeric"}
                        placeholder="Numero de téléphone"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />

                      {errors.phoneNumber ? (
                        <Text style={{ color: "red", fontSize: 10 }}>
                          9 caractères sont requis.
                        </Text>
                      ) : (
                        <Text>Doit comporter 9 caractères.</Text>
                      )}
                    </Stack>
                  )}
                  name="phoneNumber"
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
            content={
              !loading ? "Connecte toi" : <ActivityIndicator color={"white"} />
            }
            onPress={handleSubmit((data) => {
              login({ ...data, phoneNumber: `+243${data.phoneNumber}` });
            })}
          />
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
                <>
                  <ImageViewer selectedImage={signup_bg_error} />
                  <Text
                    style={{
                      fontSize: 32,
                      fontWeight: "600",
                      paddingVertical: 10,
                      color: "red",
                    }}
                  >
                    Echec !
                  </Text>
                  <Text
                    style={{ width: "80%", textAlign: "center", fontSize: 14 }}
                  >
                    {message}
                  </Text>
                </>
              </View>
            </>
          }
          closeModal={setModal}
        />
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
