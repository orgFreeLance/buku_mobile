import { Box, Flex, Pressable, Text } from "native-base";
import theme from "../../constants/theme";
import goTo from "../../utils/goTo";
import { height } from "../../constants/nativeSizes";

const AuthFomFooter = ({ navigation, userExist }) => (
  <Flex>
    <Flex justifyContent={"flex-end"} direction="row">
      <Text fontFamily={"Poppins-Regular"} fontSize={12}>
        {" "}
        {userExist ? "J'ai déjà un compte," : "J'ai pas de compte,"}{" "}
      </Text>
      <Pressable
        onPress={() => {
          goTo(navigation, userExist ? "Login" : "Signup");
        }}>
        <Text
          fontFamily={"Poppins-Regular"}
          fontSize={12}
          color={theme.colors.brand[800]}>
          {userExist ? "je me connecte." : "je m'inscris."}{" "}
        </Text>
      </Pressable>
    </Flex>
    {userExist && (
      <Flex marginTop={height(0.5)} direction="row" wrap="wrap">
        <Text fontFamily={"Poppins-Regular"} fontSize={12}>
          En cliquant sur Suivant vous avez lu notre
        </Text>
        <Text
          fontFamily={"Poppins-Regular"}
          fontSize={12}
          color={theme.colors.brand[800]}>
          Politique de confidentialité
        </Text>
      </Flex>
    )}
  </Flex>
);

export default AuthFomFooter;
