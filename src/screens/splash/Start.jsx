import { Image } from "expo-image";
import { View, Box, StatusBar } from "native-base";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ImageBackground } from "react-native";
import { height, width } from "../../constants/nativeSizes";
import goTo from "../../utils/goTo";
import theme from "../../constants/theme";
import { API_LINK, headers } from "../../constants";
import appStore from "../../store/app";
import { activesCoinURL, categoriesURl, tomesURl, getCurrencies } from "../../constants/url";
const backgroundImage = require("../../../assets/white.jpeg");
const logo = require("../../../assets/logo.png");

const Start = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const [all] = useState({ id: "Tout", attributes: { name: "Tout", symbol: "Tout" } })
  const { appChange } = appStore()
  const promises = [
    fetch(`${API_LINK}${categoriesURl}`, { headers }).then(async res => {
      const status = res.status
      const data = await res.json()
      return ({ ...data, status })
    }),
    fetch(`${API_LINK}${tomesURl}`, { headers }).then(async res => {
      const status = res.status
      const data = await res.json()
      return ({ ...data, status })
    }),
    fetch(`${activesCoinURL()}`, { headers }).then(async res => {
      const status = res.status
      const data = await res.json()
      return ({ ...data, status })
    }), fetch(`${getCurrencies()}`, { headers }).then(async res => {
      const status = res.status
      const data = await res.json()
      return ({ ...data, status })
    })
  ]
  useEffect(() => {

    Promise.all(promises).then(([category, tome, coin, currencies]) => {
      if (category.status == 200 && tome.status == 200 && coin.status == 200 && currencies.status == 200) {
        appChange({ categories: category.data.map((item) => ({ ...item, select: false })), coins: coin.data, tomes: tome.data.map((item) => ({ ...item, select: false })), currencies: [all, ...currencies.data] })
        goTo(navigation, "Welcome");
        setLoading(false)
      }
    }).then(error => {
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
