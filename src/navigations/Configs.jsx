import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Configs from "../screens/Configs";
import Billing from "../screens/Billing";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();

const UserConfigs = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
        <Stack.Screen name="Configs" component={Configs} />
        <Stack.Screen name="Billing" component={Billing} />
        <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default UserConfigs;
