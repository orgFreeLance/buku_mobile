import {
  View,
  Text,
  FormControl,
  Input,
  Stack,
  Pressable,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AuthForm from "../../componenents/organisms/AuthForm";
import userStore from "../../store/user";
import { useToast } from "native-base";
import ButtonMain from "../../components/global/button/main";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useForm, Controller } from "react-hook-form";
import goTo from "../../utils/goTo";
import theme from "../../constants/theme";
import CardAvatarAuth from "../../components/global/card/avatar/auth";

const Profile = ({ navigation }) => {
  const toast = useToast();
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const { username,
    phone_number,
    birth_date
  } = userStore(
    );
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username,
      phone_number,
      birth_date: date
    },
  });
  const onChangeDate = (selectedDate, onChange) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    onChange({ birth_date: selectedDate })
    console.log({ birth_date: selectedDate })
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };


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

                      {errors.phone_number ? (
                        <Text style={{ color: "red", fontSize: 10 }}>
                          9 caractères sont requis.
                        </Text>
                      ) : (
                        <Text>Doit comporter 9 caractères.</Text>
                      )}
                    </Stack>
                  )}
                  name="phone_number"
                />
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Stack style={{ marginBottom: 10 }}>
                      <Pressable onPress={showDatepicker}>
                        <FormControl.Label>Date de naissance</FormControl.Label>
                        <Input
                          placeholder="Date de naissance"
                          value={value}
                          InputRightElement={
                            <>
                              <FontAwesome
                                name="calendar"
                                size={16}
                                style={{ margin: 5 }}
                                color={theme.colors.brand.secondary}
                                onPress={showDatepicker}
                              />
                            </>
                          }
                        />
                      </Pressable>
                      {show && (
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={date}
                          mode={mode}
                          is24Hour={true}
                          onChange={(event, selectedDate) => { onChangeDate(event, selectedDate, onChange) }}
                        />
                      )}
                      {errors.birth_date ? (
                        <Text style={{ color: "red", fontSize: 10 }}>
                          la date est requis
                        </Text>
                      ) : (
                        <></>
                      )}
                    </Stack>
                  )}
                  name="birth_date"
                />

              </FormControl>
            </View>
          </View>
          <ButtonMain
            content="continue"
            onPress={handleSubmit(() => {
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
