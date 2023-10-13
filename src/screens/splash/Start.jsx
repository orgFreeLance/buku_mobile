import { Image } from "expo-image";
import { View, Box, StatusBar } from "native-base";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ImageBackground } from "react-native";
import { height, width } from "../../constants/nativeSizes";
import goTo from "../../utils/goTo";
import theme from "../../constants/theme";
import { API_LINK, headers } from "../../constants";
import appStore from "../../store/app";
const backgroundImage = require("../../../assets/white.jpeg");
const logo = require("../../../assets/logo.png");

const Start = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const { appChange } = appStore()
  useEffect(() => {
    fetch(`${API_LINK}/categories?populate=*`, { headers }).then(async res => {
      const status = res.status
      const data = await res.json()
      return ({ ...data, status })
    }).then(({ data, status }) => {
      setLoading(false)
      if (status == 200) {
        appChange({ categories: data.map((item) => ({ ...item, select: false })) })
        goTo(navigation, "Welcome");
      }
    }).catch(error => {
      setLoading(false)
    })
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={theme.colors.brand.secondary} />
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: height(10),
          paddingBottom: height(5),
          paddingHorizontal: width(5),
        }}
        resizeMode="cover"
        source={backgroundImage}
      >
        <Box
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            style={{ width: 400, height: 130 }}
            source={logo}
            contentFit="contain"
            transition={1000}
          />
          {loading && <ActivityIndicator color={theme.colors.brand.secondary} />}
        </Box>
      </ImageBackground>
    </View>
  );
};

export default Start;
