import {
  Flex,
  Stack,
  Text,
  StatusBar,
  View,
  Progress,
} from "native-base";
import {
  TouchableOpacity
} from "react-native"
import { Feather } from "@expo/vector-icons";
import { height, screenHeight, width } from "../../constants/nativeSizes";
import theme from "../../constants/theme";
import { TOUCHABLEOPACITY } from "../../constants";

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
      <StatusBar backgroundColor={"white"} />
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
          <TouchableOpacity activeOpacity={TOUCHABLEOPACITY} onPress={goBack}>
            <Text style={{ fontWeight: "bold" }}>
              <Feather name="arrow-left" size={24} color="black" />
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
