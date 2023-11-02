import { StatusBar } from "native-base";
import { View, Text } from "react-native";
import React from "react";
import theme from "../constants/theme";
import { WebView } from "react-native-webview";

const Web = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={theme.colors.brand.main}
        barsTyle={"light-content"}
      />
      <WebView style={{ flex: 1 }} source={{ uri: "https://monbac.cd/" }} />
    </View>
  );
};

export default Web;
