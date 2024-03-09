import { CheckIcon, Flex, Select, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import {
  TouchableOpacity,
  Text,
  ScrollView,
  StatusBar,
  View,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ImageBackground, StyleSheet } from "react-native";
import { screenHeight, width } from "../constants/nativeSizes";
import { TOUCHABLEOPACITY, headers, routes } from "../constants";
import theme from "../constants/theme";
import { useState } from "react";
import appStore from "../store/app";
import userStore from "../store/user";
import { createCommentaireURL } from "../constants/url";

const bg = require("../../assets/white.jpeg");

const LayoutRatings = ({ image = bg, navigation, children, loading }) => {
  const [create, setCreate] = useState(false);
  const closeCreateFooter = () => {
    setCreate(false);
  };
  const goBack = () => {
    const routesNav = navigation.getState()?.routes;
    const prevRoute = routesNav[routesNav.length - 2];
    const prevRouteExis = routes.find(({ name }) => name == prevRoute.name);
    if (prevRouteExis) navigation.goBack();
  };
  try {
    return (
      <View
        flex={1}
        style={{
          flex: 1,
          flexDirection: "column",
        }}
      >
        <StatusBar backgroundColor={"white"} />
        <Flex flex={1} height={screenHeight}>
          <ImageBackground
            style={{
              flex: 1,
              position: "relative",
            }}
            resizeMode="cover"
            source={image}
          >
            <View style={styles.header}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  style={styles.icon}
                  activeOpacity={TOUCHABLEOPACITY}
                  onPress={goBack}
                >
                  <Ionicons name="arrow-back-sharp" size={24} color="black" />
                </TouchableOpacity>
                <Text
                  style={{ fontWeight: "600", fontSize: 26, marginLeft: 5 }}
                >
                  Notes et commentaires
                </Text>
              </View>
              <TouchableOpacity
                style={styles.icon}
                activeOpacity={TOUCHABLEOPACITY}
              ></TouchableOpacity>
            </View>
            <ScrollView
              flex={1}
              w="100%"
              mx="auto"
              paddingHorizontal={width(5)}
            >
              {children}
            </ScrollView>
            {!loading && (
              <>
                {create ? (
                  <FooterRatings closeCreateFooter={closeCreateFooter} />
                ) : (
                  <>
                    <TouchableOpacity
                      onPress={() => {
                        setCreate(true);
                      }}
                    >
                      <View
                        style={{
                          height: 60,
                          width: 60,
                          backgroundColor: theme.colors.brand.secondary,
                          borderRadius: 100,
                          position: "absolute",
                          alignItems: "center",
                          justifyContent: "center",
                          right: 20,
                          bottom: 20,
                        }}
                      >
                        <AntDesign name="plus" size={36} color={"white"} />
                      </View>
                    </TouchableOpacity>
                  </>
                )}
              </>
            )}
          </ImageBackground>
        </Flex>
      </View>
    );
  } catch (error) {
    console.log(error);
  }
};
const FooterRatings = ({ closeCreateFooter }) => {
  let [note, setNote] = useState(1);
  let [loading, setLoading] = useState(false);
  const [comment, setComment] = useState("Ton commentaire !");
  const [stars] = useState([
    { number: 1, active: false },
    { number: 2, active: false },
    { number: 3, active: false },
    { number: 4, active: false },
    { number: 5, active: false },
  ]);
  const {
    commentaires,
    currentBook: { id: tome, ...restTome },
    appChange,
  } = appStore();
  const { id: user, ...restUser } = userStore();
  const createCommentaire = () => {
    setLoading(true);
    fetch(`${createCommentaireURL()}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        data: { userId: user, tomeId: tome, note, comment },
      }),
    })
      .then(async (res) => {
        const status = res.status;
        const data = await res.json();
        return { ...data, status };
      })
      .then(({ data }) => {
        if (data) {
          appChange({
            commentaires: [data, ...commentaires],
          });
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  return (
    <>
      <View
        style={{
          height: 150,
          backgroundColor: theme.colors.brand.secondary,
          padding: 10,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <TouchableOpacity
          onPress={closeCreateFooter}
          style={{ position: "absolute", top: -40, right: 10 }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: "black",
              alignItems: "center",
              justifyContent: "center",
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          >
            <AntDesign name="close" size={24} color={"white"} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <VStack
            alignItems="center"
            space={4}
            style={{
              backgroundColor: theme.colors.brand.secondary,
            }}
          >
            <Select
              shadow={2}
              selectedValue={note}
              minWidth="100%"
              accessibilityLabel="Donne ta note"
              placeholder="Donne ta note"
              _selectedItem={{
                bg: theme.colors.brand.secondary,
                color: "white",
                _text: {
                  color: "white",
                },
                endIcon: <CheckIcon size="5" color="white" />,
              }}
              _light={{
                bg: "white",
                borderRadius: 5,
                _hover: {
                  bg: "white",
                },
                _focus: {
                  bg: theme.colors.brand.secondary50,
                },
              }}
              onValueChange={(itemValue) => setNote(itemValue)}
            >
              {stars.map(({ number }) => (
                <Select.Item
                  shadow={number}
                  label={`${number} Etoile(s)`}
                  value={number}
                />
              ))}
            </Select>
          </VStack>
        </TouchableOpacity>
        <TextInput
          multiline
          numberOfLines={5}
          onChangeText={(text) => setComment(text)}
          value={comment}
          style={{
            backgroundColor: "white",
            marginTop: 5,
            height: "auto",
            width: "83%",
            padding: 5,
            borderRadius: 5,
          }}
        />
        <TouchableOpacity
          onPress={createCommentaire}
          style={{
            width: "15%",
            height: "auto",
            marginTop: 5,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            borderRadius: 5,
          }}
        >
          {!loading ? (
            <MaterialCommunityIcons
              name="send-circle"
              size={36}
              color={theme.colors.brand.secondary}
            />
          ) : (
            <>
              <ActivityIndicator
                size={"large"}
                color={theme.colors.brand.secondary}
              />
            </>
          )}
        </TouchableOpacity>
      </View>
    </>
  );
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
    backgroundColor: "white",
  },
  icon: {
    fontSize: 16,
    fontWeight: "500",
    color: "black",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 10,
    color: "black",
  },
  input: {
    borderRadius: 20,
    width: "85%",
    outLine: "none",
  },
});
