import {
  Flex,
  ScrollView,
  StatusBar,
  View,
} from "native-base";
import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { ImageBackground, StyleSheet } from "react-native";
import { screenHeight, width } from "../../constants/nativeSizes";
import theme from "../../constants/theme";
import ModalMenu from "../../components/global/modal/menu";
import { TOUCHABLEOPACITY } from "../../constants";
import appStore from "../../store/app";
const bg = require("../../../assets/white.jpeg");

const LayoutRatings = ({ image = bg, navigation, children, createTomeFavorite, favory = false }) => {
  const [modal, setModal] = useState(false)
  const { currentBook, } = appStore()
  try {
    return (
      <View
        flex={1}
        style={{
          flex: 1,
          flexDirection: "column",
        }}
      >
        <ModalMenu navigation={navigation} modal={modal} closeModal={() => setModal(false)} />
        <StatusBar backgroundColor={"white"} />
        <Flex flex={1} height={screenHeight}>
          <ImageBackground
            style={{
              flex: 1,
            }}
            resizeMode="cover"
            source={image}
          >
            <View style={styles.header}>
              <TouchableOpacity style={styles.icon}
                activeOpacity={TOUCHABLEOPACITY}
                onPress={() => { navigation.goBack() }}>
                <Ionicons name="arrow-back-sharp" size={28} color="black" />
              </TouchableOpacity>
              <Text style={{ fontWeight: "900", fontSize: 26 }}>
                {currentBook.name}
              </Text>
              <TouchableOpacity style={styles.icon}
                activeOpacity={TOUCHABLEOPACITY}

              >
              </TouchableOpacity>
            </View>

            <ScrollView
              flex={1}
              w="100%"
              mx="auto"
              paddingHorizontal={width(5)}
            >
              {children}
            </ScrollView>
          </ImageBackground>

        </Flex >
      </View >
    );
  } catch (error) {
    console.log(error)
  }
};

export default LayoutRatings;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    width: "100%",
    paddingHorizontal: width(5),
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white"
  },
  icon: {
    fontSize: 20,
    fontWeight: "700",
    color: "black"
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 10,
    color: "black"
  },
  input: {
    borderRadius: 20,
    width: "85%",
    outLine: "none",
  }
});
