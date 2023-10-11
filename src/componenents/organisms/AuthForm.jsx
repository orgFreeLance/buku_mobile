import {
  Center,
  Flex,
  ScrollView,
  Stack,
  Text,
  StatusBar,
  View,
  Pressable,
  Progress,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import { height, screenHeight, width } from "../../constants/nativeSizes";
import theme from "../../constants/theme";

const AuthForm = ({ navigation, children, title, progress = 20 }) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <StatusBar backgroundColor={theme.colors.brand.secondary} />
      <Flex
        flex={1}
        style={{
          paddingHorizontal: width(5),
          paddingBottom: height(2),
        }}
        height={screenHeight}>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 20,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Pressable onPress={goBack}>
            <Text style={{ fontWeight: "bold" }}>
              <Feather name="arrow-left" size={24} color="black" />
            </Text>
          </Pressable>
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
