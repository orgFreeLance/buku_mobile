import {
  View,
  Text,
  FormControl,
  Input,
  Stack,
} from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import AuthForm from "../../layouts/organisms/AuthForm";
import userStore from "../../store/user";
import ButtonMain from "../../components/global/button/main";
import { useForm, Controller } from "react-hook-form";
import goTo from "../../utils/goTo";
import CardAvatarAuth from "../../components/global/card/avatar/auth";

const Profile = ({ navigation }) => {

  const {
    username,
    phoneNumber,
    userChange
  } = userStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username,
      phoneNumber
    },
  });




  return (
    <View style={styles.container}>
      <AuthForm
        title={"Complete ton profile "}
        navigation={navigation}
        progress={80}
      >
        <View
          style={{
            flex: 1,
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: "100%",
              flex: 1,
              paddingBottom: 20,
            }}
          >
            <Text>
              Ne vous inquiétez pas, vous êtes le seul à pouvoir consulter vos
              données personnelles, personne d'autre ne pourra les voir.
            </Text>
            <View
              style={{
                paddingVertical: 15,
                width: "100%",
                marginTop: 10,
              }}
            >
              <FormControl isRequired>
                <CardAvatarAuth />
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    minLength: 2,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Stack style={{ marginBottom: 10 }}>
                      <FormControl.Label>Nom complet</FormControl.Label>
                      <Input

                        style={{ paddingHorizontal: 10 }}
                        type="text"
                        keyboardType="text"
                        placeholder="Nom complet"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />

                      {errors.username ? (
                        <Text style={{ color: "red", fontSize: 10 }}>
                          Aux moins 2 caractères sont requis.
                        </Text>
                      ) : (
                        <Text>Doit comporter plus de 2 caractères.</Text>
                      )}
                    </Stack>
                  )}
                  name="username"
                />
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
                        keyboardType="numeric"
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
              </FormControl>
            </View>
          </View>
          <ButtonMain
            content="continue"
            onPress={handleSubmit((data) => {
              userChange(data)
              goTo(navigation, "Signup");
            })}
          />
        </View>
      </AuthForm>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
