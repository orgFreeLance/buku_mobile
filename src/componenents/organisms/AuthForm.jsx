import { Center, Flex, ScrollView, Stack, Text, StatusBar } from "native-base";
import { height, width } from "../../constants/nativeSizes";
import theme from "../../constants/theme";

const AuthForm = ({ navigation, children, title, userExist }) => (
  <ScrollView
    style={{
      flex: 1,
      paddingHorizontal: width(5),
      paddingTop: height(5),
      backgroundColor: "red",
    }}
  >
    <StatusBar backgroundColor={theme.colors.brand.secondary} />
    <Flex paddingBottom={height(5)}>
      <Center>
        <Text fontFamily={"Poppins-Bold"} fontSize={20}>
          {title}
        </Text>
      </Center>
      <Stack minHeight={height(35)} space={3} w="100%" mx="auto">
        {children}
      </Stack>
    </Flex>
  </ScrollView>
);

export default AuthForm;
