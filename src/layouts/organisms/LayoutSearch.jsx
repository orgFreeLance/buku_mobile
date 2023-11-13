import {
  Flex,
  Input,
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

const LayoutSearch = ({ image = bg, navigation, children }) => {
  const [modal, setModal] = useState(false)

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
            <TouchableOpacity style={styles.title}
              activeOpacity={TOUCHABLEOPACITY}
              onPress={() => { navigation.goBack() }}>
              <Ionicons name="arrow-back-sharp" size={24} color="black" />
            </TouchableOpacity>
            <View style={{ width: "90%" }}>
              <Input type="text"
                style={styles.input}
                borderColor={"gray.100"}
                backgroundColor={"gray.100"}
                outlineColor={theme.colors.brand.secondary}
                borderRadius={15}
                borderWidth={2}
                leftElement={<>
                  <AntDesign name="search1" size={20} style={{ marginLeft: 10 }} color="black" />
                </>}
                rightElement={<TouchableOpacity onPress={() => setModal(true)}>
                  <Octicons name="filter" style={{ marginRight: 10 }} size={24} color={theme.colors.brand.secondary} />
                </TouchableOpacity>}
              />
            </View>
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

export default LayoutSearch;


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
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "black"
  },
  input: {
    borderRadius: 20,
    width: "85%",
    outLine: "none",
  }
});
