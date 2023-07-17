import { Center, Flex, ScrollView, Stack, Text } from "native-base";
import AuthFomFooter from "../molecules/AuthFormFooter";
import { height, width } from "../../constants/nativeSizes";
import Header1 from "./Header1";

const AuthForm = ({ children, title }) => (
    <ScrollView style={{ flex: 1, paddingHorizontal: width(5), paddingVertical: height(1) }}>
        <Flex minHeight={height(55)} justifyContent={"space-between"}>
            <Header1 />
            <Center>
                <Text fontFamily={"Poppins-Bold"} fontSize={20}>{title}</Text>
            </Center>
            <Stack height={height(35)} space={4} w="100%" mx="auto">
                {children}
                <Text fontFamily={"Poppins-Regular"} fontSize={12}>*Champ obligatoire</Text>
                <AuthFomFooter userExist={false} />
            </Stack>
        </Flex>
    </ScrollView>
);

export default AuthForm;