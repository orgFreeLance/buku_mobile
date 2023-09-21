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
import { ProgressBarAndroid } from "react-native";
import { Feather } from "@expo/vector-icons";
import { height, width } from "../../constants/nativeSizes";
import theme from "../../constants/theme";

const AuthForm = ({ navigation, children, title, progress = 20 }) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: width(5),
        paddingBottom: height(5),
      }}
    >
      <StatusBar backgroundColor={theme.colors.brand.secondary} />
      <Flex paddingBottom={height(5)}>
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
        <Text fontFamily={"Poppins-Bold"} fontSize={24} paddingBottom={2}>
          {title}
        </Text>
        <Stack minHeight={height(83.5)} space={3} w="100%" mx="auto">
          {children}
        </Stack>
      </Flex>
    </ScrollView>
  );
};

export default AuthForm;
