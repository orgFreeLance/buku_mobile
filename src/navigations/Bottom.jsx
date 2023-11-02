import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Configs from "../screens/Configs";
import Galery from "../screens/Galery";
import Web from "../screens/Web";
import UserConfigs from "./Configs";
import HomeStack from "./HomeStack";
import { SvgXml } from "react-native-svg";
import { dotsActiveIcon, dotsIcon, homeActiveIcon, homeIcon, webViewActiveIcon, webViewIcon } from "../constants/svgs";

const Tab = createBottomTabNavigator();

const Bottom = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <SvgXml xml={focused ? homeActiveIcon : homeIcon} />
            );
          },
        }}
        name="HomeStack"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <SvgXml xml={focused ? webViewActiveIcon : webViewIcon} />
            );
          },
        }}
        name="Web"
        component={Web}
      />
      {/* <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                style={{ width: 16, height: 16 }}
                source={focused ? heart : heartInactive}
                resizeMode="contain"
              />
            );
          },
        }}
        name="Galery"
        component={Galery}
      /> */}
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <SvgXml xml={focused ? dotsActiveIcon : dotsIcon} />
            );
          },
        }}
        name="UserConfigs"
        component={UserConfigs}
      />
    </Tab.Navigator>
  );
};

export default Bottom;
