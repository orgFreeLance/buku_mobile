import {
  View,
  Text,
  FormControl,
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Pressable,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AuthForm from "../../componenents/organisms/AuthForm";
import userStore from "../../store/user";
import { shallow } from "zustand/shallow";
import { useToast } from "native-base";
import ButtonMain from "../../components/global/button/main";
import DateTimePicker from "@react-native-community/datetimepicker";
import goTo from "../../utils/goTo";
import theme from "../../constants/theme";
import CardAvatarAuth from "../../components/global/card/avatar/auth";

const Profile = ({ navigation }) => {
  const toast = useToast();
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const [logUser, isAuth] = userStore(
    (state) => [state.logUser, state.isAuth],
    shallow
  );

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
                <Stack style={{ marginBottom: 10 }}>
                  <Pressable onPress={showDatepicker}>
                    <FormControl.Label>Date de naissance</FormControl.Label>
                    <Input
                      placeholder="Date de naissance"
                      value={date.toDateString()}
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
                      onChange={onChange}
                    />
                  )}
                  <FormControl.ErrorMessage>
                    Au moins 10 caractères sont requis.
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>
            </View>
          </View>
          <ButtonMain
            content="continue"
            onPress={() => {
              goTo(navigation, "Signup");
            }}
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
