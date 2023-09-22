import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import userStore from "../store/user";
import Login from "../screens/auth/Login";
import Signup from "../screens/auth/Signup";
import Welecome from "../screens/auth/Welcome";
import Home from "../screens/Home";
import Start from "../screens/splash/Start";
import Gender from "../screens/auth/Gender";
import Age from "../screens/auth/Age";
import Category from "../screens/auth/Category";
import Profile from "../screens/auth/Profile";
import Forgot from "../screens/auth/Forgot";
import CodeOtp from "../screens/auth/CodeOtp";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const userIsAuth = userStore((state) => state.isAuth);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!userIsAuth ? (
        <Stack.Group>
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Welcome" component={Welecome} />
          <Stack.Screen name="Gender" component={Gender} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Age" component={Age} />
          <Stack.Screen name="Category" component={Category} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Forgot" component={Forgot} />
          <Stack.Screen name="CodeOtp" component={CodeOtp} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default MainNavigation;
