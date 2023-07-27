import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Configs from "../screens/Configs";
import Billing from "../screens/Billing";

const Stack = createNativeStackNavigator();

const UserConfigs = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
        <Stack.Screen name="Configs" component={Configs} />
        <Stack.Screen name="Billing" component={Billing} />
    </Stack.Navigator>
  );
};

export default UserConfigs;
