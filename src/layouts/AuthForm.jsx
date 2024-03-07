import { Flex, Stack, Progress } from "native-base";
import { TouchableOpacity, Text, StatusBar, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { height, screenHeight, width } from "../constants/nativeSizes";
import { TOUCHABLEOPACITY, routes } from "../constants";

const AuthForm = ({ navigation, children, title, progress = 20 }) => {
  const goBack = () => {
    const routesNav = navigation.getState()?.routes;
    const prevRoute = routesNav[routesNav.length - 2];
    const prevRouteExis = routes.find(({ name }) => name == prevRoute.name);
    if (prevRouteExis) navigation.goBack();
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <StatusBar backgroundColor={"white"} />
      <Flex
        flex={1}
        style={{
          paddingHorizontal: width(5),
          paddingBottom: height(2),
        }}
        height={screenHeight}
      >
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 20,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity activeOpacity={TOUCHABLEOPACITY} onPress={goBack}>
            <Text style={{ fontWeight: "bold" }}>
              <Ionicons name="arrow-back-sharp" size={28} color="black" />
            </Text>
          </TouchableOpacity>
          <Progress
            styleAttr="Horizontal"
            indeterminate={false}
            style={{ width: 180, borderRadius: 5 }}
            value={progress}
          />
          <Text></Text>
        </View>
        <Text fontFamily={"Poppins-Bold"} fontSize={32} paddingBottom={2}>
          {title}
        </Text>
        <Stack flex={1} style={{ flex: 1 }} space={2} w="100%" mx="auto">
          {children}
        </Stack>
      </Flex>
    </View>
  );
};

export default AuthForm;
