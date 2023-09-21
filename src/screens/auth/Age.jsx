import { View, Text } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AuthForm from "../../componenents/organisms/AuthForm";
import userStore from "../../store/user";
import { shallow } from "zustand/shallow";
import { useToast } from "native-base";
import ButtonMain from "../../components/global/button/main";
import Category from "./Category";
import goTo from "../../utils/goTo";

const Age = ({ navigation }) => {
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
        title={"Choisissez votre âge "}
        navigation={navigation}
        progress={0.4}
      >
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
              goTo(navigation, "Category");
            }}
          />
        </View>
      </AuthForm>
    </View>
  );
};

export default Age;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
