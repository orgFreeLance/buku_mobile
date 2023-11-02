<<<<<<< HEAD
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import userStore from "../store/user";
import Login from "../screens/auth/Login";
import Signup from "../screens/auth/Signup";
import Welecome from "../screens/auth/Welcome";
import Home from "../screens/app/Home";
import Start from "../screens/splash/Start";
import Gender from "../screens/auth/Gender";
import Age from "../screens/auth/Age";
import Category from "../screens/auth/Category";
import Profile from "../screens/auth/Profile";
import Forgot from "../screens/auth/Forgot";
import CodeOtp from "../screens/auth/CodeOtp";
import Password from "../screens/auth/Password";
import Account from "../screens/app/Account";
import Purchase from "../screens/app/Purchase";
import Coins from "../screens/app/Coins";
import Discover from "../screens/app/Discover";
import Search from "../screens/app/Search";
import Genre from "../screens/app/Genre";
import BookByGenre from "../screens/app/BookByGenre";
import Books from "../screens/app/Books";
import Book from "../screens/app/Book";
=======
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
>>>>>>> fbf37147b99988978f7f318dfed95a706aa0183b

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
const Stack = createStackNavigator();

<<<<<<< HEAD
const MainNavigation = () => {
  const userIsAuth = userStore((state) => state.isAuth);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      {!userIsAuth ? (
        <Stack.Group>
          <Stack.Screen name="Start" component={Start}
            options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="Login" component={Login}
            options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="Welcome" component={Welecome}
            options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="Gender" component={Gender}
            options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="Signup" component={Signup}
            options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="Age" component={Age}
            options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="Category" component={Category}
            options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="Profile" component={Profile}
            options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="Home" component={Home}
            options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="Forgot" component={Forgot}
            options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="CodeOtp" component={CodeOtp}
            options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="Password" component={Password}
            options={{ cardStyleInterpolator: forFade }} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Home" component={Home}
            options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="Account" component={Account}
            options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="Search" component={Search}
            options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="Genre" component={Genre}
            options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="BookByGenre" component={BookByGenre}
            options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="Book" component={Book}
            options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="Purchase" component={Purchase}
            options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="Books" component={Books}
            options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="Coins" component={Coins}
            options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="Discover" component={Discover}
            options={{ cardStyleInterpolator: forFade }} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

=======
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
  }, [confirmed]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!loading ? (
        <>

          {confirmed ? (
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

>>>>>>> fbf37147b99988978f7f318dfed95a706aa0183b
export default MainNavigation;
