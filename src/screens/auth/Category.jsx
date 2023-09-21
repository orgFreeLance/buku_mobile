import { View, Text } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AuthForm from "../../componenents/organisms/AuthForm";
import userStore from "../../store/user";
import { shallow } from "zustand/shallow";
import { useToast } from "native-base";
import ButtonMain from "../../components/global/button/main";
import ButtonSecondary from "../../components/global/button/secondary";
import goTo from "../../utils/goTo";

const Category = ({ navigation }) => {
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
        title={"Choisissez le genre de livre que vous aimez "}
        navigation={navigation}
        progress={60}
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
          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View style={{ width: "50%" }}>
              <ButtonSecondary
                content="passer"
                onPress={() => {
                  goTo(navigation, "Profile");
                }}
              />
            </View>
            <View style={{ width: "50%" }}>
              <ButtonMain
                content="continue"
                onPress={() => {
                  goTo(navigation, "Profile");
                }}
              />
            </View>
          </View>
        </View>
      </AuthForm>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
