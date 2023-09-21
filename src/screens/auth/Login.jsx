import { Input, StatusBar, View } from "native-base"; 
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import CTAContainer from "../../componenents/organisms/CTAContainer";
import AuthForm from "../../componenents/organisms/AuthForm";
import theme from "../../constants/theme";
import userStore from "../../store/user";
import { shallow } from "zustand/shallow";
import { useToast } from "native-base";
import { submitForm } from "../../utils/sbmitAuth";

const Login = ({ navigation }) => {
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
      <AuthForm title={"Connexion"} navigation={navigation} userExist={false}>
        
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
