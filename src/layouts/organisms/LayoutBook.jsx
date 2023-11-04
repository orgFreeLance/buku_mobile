import {
  Flex, Text,
  ScrollView,
  StatusBar,
  View,
} from "native-base";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons, AntDesign, Octicons } from '@expo/vector-icons';
import { ImageBackground, StyleSheet } from "react-native";
import { screenHeight, width } from "../../constants/nativeSizes";
import theme from "../../constants/theme";
import userStore from "../../store/user";
import ModalMenu from "../../components/global/modal/menu";
import { TOUCHABLEOPACITY } from "../../constants";
const bg = require("../../../assets/white.jpeg");

const LayoutBook = ({ image = bg, navigation, children, title }) => {
  const [modal, setModal] = useState(false)
  const { isAuth } = userStore()

  useEffect(() => {
    if (!isAuth) {
      goTo(navigation, "Welcome")
    }
  }, [isAuth])

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
              <Ionicons name="arrow-back-sharp" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>
              {title}
            </Text>
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
};

export default LayoutBook;


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
    justifyContent: "flex-start",
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
