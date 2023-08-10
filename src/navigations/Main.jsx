import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
import Signup from "../screens/auth/Signup";
import Start from "../screens/splash/Start";
import Bottom from "./Bottom";
import VerifyCode from "../screens/auth/VerifyCode";
import { observer } from "mobx-react-lite";
import * as SecureStore from "expo-secure-store";
import Splash from "../screens/splash/Splash";
import userStore from "../store/user";
import { shallow } from "zustand/shallow";

const Stack = createNativeStackNavigator();

const MainNavigation = observer(() => {
  const [userAuth, setIsAuth] = useState(false);
  const [userConfirm, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmed, isAuth] = userStore(
    (state) => [state.confirmed, state.isAuth],
    shallow
  );

  const getAuthKeys = async () => {
    setLoading(true);
    const isAuth =
      parseInt(await SecureStore.getItemAsync("isAuth"), 10) === 1 || isAuth;
    const confirmed =
      parseInt(await SecureStore.getItemAsync("confirmed"), 10) === 1 ||
      confirmed;
    setIsAuth(isAuth);
    setConfirmed(confirmed);
    setLoading(false);
  };

  useEffect(() => {
    getAuthKeys();
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!loading ? (
        <>

          {userConfirm ? (
            <Stack.Group>
              <Stack.Screen name='Bottom' component={Bottom} />
            </Stack.Group>
          ) : (
            <Stack.Group>
              <Stack.Screen name='Start' component={Start} />
              <Stack.Screen name='Login' component={Login} />
              <Stack.Screen name='Signup' component={Signup} />
              <Stack.Screen name='VerifyCode' component={VerifyCode} />
            </Stack.Group>
          )}
        </>
      ) : (
        <Stack.Screen name='Splash' component={Splash} />
      )}
    </Stack.Navigator>
  );
});

export default MainNavigation;
