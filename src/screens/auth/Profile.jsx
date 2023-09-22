import {
  View,
  Text,
  FormControl,
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AuthForm from "../../componenents/organisms/AuthForm";
import userStore from "../../store/user";
import { shallow } from "zustand/shallow";
import { useToast } from "native-base";
import ButtonMain from "../../components/global/button/main";
import ButtonSecondary from "../../components/global/button/secondary";
import goTo from "../../utils/goTo";
import CardAvatarAuth from "../../components/global/card/avatar/auth";

const Profile = ({ navigation }) => {
  const toast = useToast();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);
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
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "100%", paddingBottom: 20 }}>
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
                  <FormControl.Label>Date de naissance</FormControl.Label>
                  <Input
                    style={{ paddingHorizontal: 10 }}
                    type="date"
                    placeholder="Date de naissance"
                  />
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
