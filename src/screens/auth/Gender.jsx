import { Input, StatusBar, View, Text } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AuthForm from "../../componenents/organisms/AuthForm";
import userStore from "../../store/user";
import { shallow } from "zustand/shallow";
import { useToast } from "native-base";
import ButtonMain from "../../components/global/button/main";
import goTo from "../../utils/goTo";

const Gender = ({ navigation }) => {
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
      <AuthForm title={"Quel est ton genre ?"} navigation={navigation}>
        <View
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "100%", paddingBottom: 10 }}>
            <Text>sélectionner le sexe pour un meilleur contenu</Text>
            <View
              style={{
                backgroundColor: "red",
                paddingVertical: 15,
                height: 50,
                width: "100%",
                marginTop: 10,
              }}
            ></View>
          </View>
          <ButtonMain
            content="continue"
            onPress={() => {
              goTo(navigation, "Age");
            }}
          />
        </View>
      </AuthForm>
    </View>
  );
};

export default Gender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
