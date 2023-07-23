import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import userStore from "../store/user";
import Login from "../screens/auth/Login";
import Signup from "../screens/auth/Signup";
import Home from "../screens/Home";
import Start from "../screens/splash/Start";
import Bottom from "./Bottom";
import VerifyCode from "../screens/auth/VerifyCode";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const userIsAuth = userStore((state) => state.isAuth);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!userIsAuth ? (
        <Stack.Group>
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="VerifyCode" component={VerifyCode} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Bottom" component={Bottom} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default MainNavigation;
