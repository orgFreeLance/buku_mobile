import { Box, Center, Flex, ScrollView, Stack, Text, View } from "native-base";
import AuthFomFooter from "../molecules/AuthFormFooter";
import { height, width } from "../../constants/nativeSizes";
import Header1 from "./Header1";

const AuthForm = ({
  navigation,
  children,
  title,
  userExist,
  isVerification,
  errors,
}) => (
  <ScrollView
    style={{
      flex: 1,
      paddingHorizontal: width(5),
      paddingTop: height(1),
    }}>
    {errors && <View />}
    <Flex
      paddingBottom={height(2)}
      minHeight={!userExist ? height(65) : height(85)}
      justifyContent={"space-between"}>
      <Header1 />
      <Center>
        <Text fontFamily={"Poppins-Bold"} fontSize={20}>
          {title}
        </Text>
      </Center>
      {userExist && (
        <Box marginBottom={2}>
          <Text fontFamily={"Poppins-Regular"} fontSize={12}>
            Ces informations seront utilisées pour personnaliser votre
            expérience dans l’application et enregistrer votre billet qui vous
            donnera accès à l’event Veuillez donc le prendre soin de le remplir
            correctement
          </Text>
        </Box>
      )}

      <Stack minHeight={height(35)} space={3} w="100%" mx="auto">
        {children}
        {!isVerification && (
          <>
            <Text fontFamily={"Poppins-Regular"} fontSize={12}>
              *Champ obligatoire
            </Text>
            <AuthFomFooter navigation={navigation} userExist={userExist} />
          </>
        )}
      </Stack>
    </Flex>
  </ScrollView>
);

export default AuthForm;
