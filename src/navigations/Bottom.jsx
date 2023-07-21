import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Configs from "../screens/Configs";
import Galery from "../screens/Galery";
import Web from "../screens/Web";
const home = require("../../assets/home.png");
const homeInactive = require("../../assets/home-inactive.png");
const webview = require("../../assets/webview.png");
const heart = require("../../assets/heart.png");
const heartInactive = require("../../assets/heart-inactive.png");
const dots = require("../../assets/dots.png");
const dotsInactive = require("../../assets/dots-inactive.png");

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
              <Image
                style={{ width: 16, height: 16 }}
                source={focused ? home : homeInactive}
                resizeMode="contain"
              />
            );
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                style={{ width: 16, height: 16 }}
                source={webview}
                resizeMode="contain"
              />
            );
          },
        }}
        name="Web"
        component={Web}
      />
      <Tab.Screen
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
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                style={{ width: 16, height: 16 }}
                source={focused ? dots : dotsInactive}
                resizeMode="contain"
              />
            );
          },
        }}
        name="Configs"
        component={Configs}
      />
    </Tab.Navigator>
  );
};

export default Bottom;
