import { Box, Center, Flex, ScrollView, Stack, Text } from "native-base";
import AuthFomFooter from "../molecules/AuthFormFooter";
import { height, width } from "../../constants/nativeSizes";
import Header1 from "./Header1";

const AuthForm = ({ navigation, children, title, userExist }) => (
  <ScrollView
    style={{
      flex: 1,
      paddingHorizontal: width(5),
      paddingTop: height(1),
    }}
  >
    <Flex
      paddingBottom={height(2)}
      height={!userExist ? height(65) : height(85)}
      justifyContent={"space-between"}
    >
      <Center>
        <Text fontFamily={"Poppins-Bold"} fontSize={20}>
          {title}
        </Text>
      </Center>

      <Stack minHeight={height(35)} space={3} w="100%" mx="auto">
        {children}
        <Text fontFamily={"Poppins-Regular"} fontSize={12}>
          *Champ obligatoire
        </Text>
        <AuthFomFooter navigation={navigation} userExist={userExist} />
      </Stack>
    </Flex>
  </ScrollView>
);

export default AuthForm;
