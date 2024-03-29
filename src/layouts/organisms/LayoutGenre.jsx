import {
  Flex,
  ScrollView,
  StatusBar,
} from "native-base";
import {  useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import {AntDesign, Ionicons } from '@expo/vector-icons';
import { ImageBackground, StyleSheet } from "react-native";
import { screenHeight, width } from "../../constants/nativeSizes";
import theme from "../../constants/theme";
import ModalMenu from "../../components/global/modal/menu";
import { OPACITY, TOUCHABLEOPACITY } from "../../constants";
import goTo from "../../utils/goTo";
const bg = require("../../../assets/white.jpeg");

const LayoutGenre = ({ image = bg, navigation, children, title = "" }) => {
  const [modal, setModal] = useState(false)
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
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  activeOpacity={TOUCHABLEOPACITY}
                  onPress={() => {
                    navigation.goBack()
                  }}
                >
                  <Ionicons name="arrow-back-sharp" size={24} color="black" style={{ marginRight: 5 }} />
                </TouchableOpacity>
                <Text style={styles.title}>
                  {title}
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={TOUCHABLEOPACITY}
                onPress={() => {
                  goTo(navigation, "Search")
                }}
              >
                <AntDesign name="search1" size={24} color="black" />
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
    return <></>
  }
};

export default LayoutGenre;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60, width: "100%",
    paddingHorizontal: width(3),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white"
  },
  avatar: {
    height: 50,
    width: 50,
    backgroundColor: theme.colors.brand.secondary,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "black"
  },
  link: {
    justifyContent: "center",
    padding: width(1),
    alignItems: "center",
  },
  link_hover: {
    justifyContent: "center",
    padding: width(1),
    alignItems: "center",
    opacity: OPACITY
  }
});
