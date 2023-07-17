import { Flex, Pressable, Text } from "native-base";
import theme from "../../constants/theme";
import goTo from "../../utils/goTo";

const AuthFomFooter = ({ navigation, userExist }) => (
    <Flex justifyContent={"flex-end"} direction='row'>
        <Text fontFamily={"Poppins-Regular"} fontSize={12}> {userExist ? "J'ai déjà un compte," : "J'ai pas de compte,"} </Text>
        <Pressable onPress={() => {
            goTo(navigation, userExist ? "Login" : "Signup")
        }}>
            <Text fontFamily={"Poppins-Regular"} fontSize={12} color={theme.colors.brand[800]}>{userExist ? "je me connecte." : "je m'inscris."} </Text>
        </Pressable>
    </Flex>
);

export default AuthFomFooter;