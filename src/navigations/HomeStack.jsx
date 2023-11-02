import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ResusltConfig from "../screens/ResusltConfig";
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ResusltConfig" component={ResusltConfig} />
    </Stack.Navigator>
  );
};

export default HomeStack;
