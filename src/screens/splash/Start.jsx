import { Image } from "expo-image";
import { View, Box, StatusBar } from "native-base";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ImageBackground } from "react-native";
import { height, width } from "../../constants/nativeSizes";
import goTo from "../../utils/goTo";
import theme from "../../constants/theme";
<<<<<<< HEAD
import { API_LINK, headers } from "../../constants";
import appStore from "../../store/app";
const backgroundImage = require("../../../assets/white.jpeg");
const logo = require("../../../assets/logo.png");
=======
import { SvgXml } from "react-native-svg";
import { logo } from "../../constants/svgs";
const backgroundImage = require("../../../assets/mainImage.png");
>>>>>>> fbf37147b99988978f7f318dfed95a706aa0183b

const Start = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const { appChange } = appStore()
  const promises = [
    fetch(`${API_LINK}/categories?fields[0]=picture&fields[1]=name&fields[2]=id`, { headers }).then(async res => {
      const status = res.status
      const data = await res.json()
      return ({ ...data, status })
    }),
    fetch(`${API_LINK}/tomes?fields[0]=picture&fields[1]=name&fields[2]=id&populate[0]=likes`, { headers }).then(async res => {
      const status = res.status
      const data = await res.json()
      return ({ ...data, status })
    })
  ]
  useEffect(() => {
    Promise.all(promises).then(([category, tome]) => {

      if (category.status == 200 && tome.status == 200) {
        appChange({ categories: category.data.map((item) => ({ ...item, select: false })), tomes: tome.data.map((item) => ({ ...item, select: false })) })
        goTo(navigation, "Welcome");
        setLoading(false)
      }
    }).then(error => {
      setLoading(false)
    })

  }, [])
  return (
    <View style={{ flex: 1 }}>
<<<<<<< HEAD
      <StatusBar backgroundColor={theme.colors.brand.secondary} />
=======
      <StatusBar backgroundColor={theme.colors.brand.main} />
>>>>>>> fbf37147b99988978f7f318dfed95a706aa0183b
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: height(10),
          paddingBottom: height(5),
          paddingHorizontal: width(5),
        }}
<<<<<<< HEAD
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
=======
        resizeMode='cover'
        source={backgroundImage}
      >
        <Box>
          <SvgXml xml={logo} />
>>>>>>> fbf37147b99988978f7f318dfed95a706aa0183b
        </Box>
      </ImageBackground>
    </View>
  );
};

export default Start;
