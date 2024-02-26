import { Modal, Pressable, FormControl, Input, Stack } from "native-base";
import { Text, View, ActivityIndicator } from "react-native";
import { useForm, Controller } from "react-hook-form";
import React from "react";
import ButtonMain from "../../button/main";
import userStore from "../../../../store/user";
import ModalContainer from "../notification";
import ImageViewer from "../../imageViewer";
import theme from "../../../../constants/theme";
import { updateUserPassword } from "../../../../constants/url";

const signup_bg_success = require("../../../../../assets/notifications/signupSuccess.png");
const signup_bg_error = require("../../../../../assets/notifications/signupError.png");

export default function ModalPassword({
  modal = false,
  closeModal = () => {},
}) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [error, setError] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const { password, newPassword, confirmPassword, userChange, id } =
    userStore();
  const closeModalMessage = () => {
    setModalMessage(false);
  };
  const openSuccess = () => {
    setSuccess(true);
  };
  const submit = () => {
    setLoading(true);
    
    console.log(updateUserPassword(id)), { password, newPassword };

    fetch(updateUserPassword(id), {
      method: "POST",
      body: JSON.stringify({
        data: {
          password,
          newPassword,
        },
      }),
      headers,
    })
      .then(async (res) => {
        const status = res.status;
        const data = await res.json();
        return { ...data, status };
      })
      .then(({ status, ...data }) => {
        console.log(data);
        userChange({ ...data });
        setLoading(false);
        openSuccess();
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setLoading(false);
      });
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  return (
    <>
      <Modal
        isOpen={modal}
        onClose={closeModal}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content
          style={{
            backgroundColor: "white",
            width: "90%",
          }}
        >
          <Modal.CloseButton />
          <Modal.Header
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <View
              style={{
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Pressable onPress={closeModal}>
                <Text style={{ fontWeight: "700", fontSize: 24 }}>
                  Configuration Mot de passe
                </Text>
              </Pressable>
              <View style={{ marginLeft: 10 }}></View>
            </View>
          </Modal.Header>
          <Modal.Body style={{ width: "100%", justifyContent: "center" }}>
            <FormControl isRequired>
              <Controller
                control={control}
                rules={{
                  required: true,
                  minLength: 6,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Stack style={{ marginBottom: 10 }}>
                    <FormControl.Label>Ancien Mot de passe</FormControl.Label>
                    <Input
                      style={{ paddingHorizontal: 10 }}
                      type="password"
                      keyboardType="text"
                      placeholder="Ancien Mot de passe"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />

                    {errors.password ? (
                      <Text style={{ color: "red", fontSize: 10 }}>
                        Aux moins 6 caractères sont requis.
                      </Text>
                    ) : (
                      <Text>Doit comporter plus de 5 caractères.</Text>
                    )}
                  </Stack>
                )}
                name="password"
              />
              <Controller
                control={control}
                rules={{
                  required: true,
                  minLength: 6,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Stack style={{ marginBottom: 10 }}>
                    <FormControl.Label>Nouveau Mot de passe</FormControl.Label>
                    <Input
                      style={{ paddingHorizontal: 10 }}
                      type="password"
                      keyboardType="text"
                      placeholder="Nouveau Mot de passe"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />

                    {errors.newPassword ? (
                      <Text style={{ color: "red", fontSize: 10 }}>
                        Aux moins 6 caractères sont requis.
                      </Text>
                    ) : (
                      <Text>Doit comporter plus de 5 caractères.</Text>
                    )}
                  </Stack>
                )}
                name="newPassword"
              />
              <Controller
                control={control}
                rules={{
                  required: true,
                  minLength: 6,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Stack style={{ marginBottom: 10 }}>
                    <FormControl.Label>
                      Confirmer le mot de passe
                    </FormControl.Label>
                    <Input
                      style={{ paddingHorizontal: 10 }}
                      type="password"
                      keyboardType="text"
                      placeholder="Confirmer le mot de passe"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />

                    {errors.confirmPassword ? (
                      <Text style={{ color: "red", fontSize: 10 }}>
                        Aux moins 6 caractères sont requis.
                      </Text>
                    ) : (
                      <Text>Doit comporter plus de 5 caractères.</Text>
                    )}
                  </Stack>
                )}
                name="confirmPassword"
              />
            </FormControl>
          </Modal.Body>
          <Modal.Footer style={{ height: "auto" }}>
            <ButtonMain
              borderRadius={10}
              width="100%"
              onPress={handleSubmit(async (data) => {
                userChange(data);
                if (data.password !== password) {
                  setError(true);
                  setModalMessage(true);
                  setMessage(
                    "Le mot de passe entré n'est pas identique au mot de passe de votre compte !"
                  );
                } else if (data.confirmPassword !== data.newPassword) {
                  setError(true);
                  setModalMessage(true);
                  setMessage(
                    "Le champ nouveau mot de passe est différent du champ confirmer le mot de passe !"
                  );
                } else {
                  submit();
                }
              })}
              content={
                !loading ? "Enregistrer" : <ActivityIndicator color={"white"} />
              }
            />
          </Modal.Footer>
          <ModalContainer
            modal={modalMessage}
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
                    {error ? (
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
                          <ImageViewer selectedImage={signup_bg_error} />
                          <Text
                            style={{
                              fontSize: 32,
                              fontWeight: "600",
                              paddingVertical: 10,
                              color: "red",
                            }}
                          >
                            Modification échouée
                          </Text>
                          <Text
                            style={{
                              width: "80%",
                              textAlign: "center",
                              fontSize: 14,
                            }}
                          >
                            {message}
                          </Text>
                        </View>
                      </>
                    ) : (
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
                          <ImageViewer selectedImage={signup_bg_success} />
                          <Text
                            style={{
                              fontSize: 32,
                              fontWeight: "600",
                              paddingVertical: 10,
                              color: theme.colors.brand.secondary,
                            }}
                          >
                            Modification réussie
                          </Text>
                          <Text
                            style={{
                              width: "80%",
                              textAlign: "center",
                              fontSize: 14,
                            }}
                          >
                            votre compte a été modifié.
                          </Text>
                        </View>
                      </>
                    )}
                  </>
                </View>
              </>
            }
            closeModal={closeModalMessage}
          />
        </Modal.Content>
      </Modal>
    </>
  );
}
