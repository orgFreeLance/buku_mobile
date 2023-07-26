import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import userStore from "../store/user";
import Login from "../screens/auth/Login";
import Signup from "../screens/auth/Signup";
import Home from "../screens/Home";
import Start from "../screens/splash/Start";
import Bottom from "./Bottom";
import VerifyCode from "../screens/auth/VerifyCode";
import { observer } from "mobx-react-lite";
import * as SecureStore from "expo-secure-store";

const Stack = createNativeStackNavigator();

const MainNavigation = observer(() => {
  const [isAuth, setIsAuth] = useState(0);
  const [confirmed, setConfirmed] = useState(0);
  const [loading, setLoading] = useState(false);

  const getAuthKeys = async () => {
    setLoading(true);
    setIsAuth(parseInt(await SecureStore.getItemAsync("isAuth"), 10));
    setConfirmed(parseInt(await SecureStore.getItemAsync("confirmed"), 10));
    setLoading(false);
  };

  useEffect(() => {
    getAuthKeys();
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!loading ? (
        <>
          {confirmed === 1 && (
            <Stack.Group>
              <Stack.Screen name="Bottom" component={Bottom} />
            </Stack.Group>
          )}
          {confirmed !== 1 && isAuth !== 1 && (
            <Stack.Group>
              <Stack.Screen name="Start" component={Start} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Signup" component={Signup} />
            </Stack.Group>
          )}

          {confirmed !== 1 && isAuth === 1 && (
            <Stack.Group>
              <Stack.Screen name="VerifyCode" component={VerifyCode} />
            </Stack.Group>
          )}
        </>
      ) : (
        <Stack.Screen name="Start" component={Start} />
      )}
    </Stack.Navigator>
  );
});

export default MainNavigation;
