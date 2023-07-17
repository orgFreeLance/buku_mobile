import { Box, Center, Flex, Input, Pressable, ScrollView, Stack, StatusBar, Text, View } from 'native-base';
import * as React from 'react';
import { StyleSheet, } from 'react-native';
import CTAContainer from '../../componenents/organisms/CTAContainer';
import { height, width } from '../../constants/nativeSizes';
import Header1 from '../../componenents/organisms/Header1';
import theme from '../../constants/theme';
import AuthFomFooter from '../../componenents/molecules/AuthFormFooter';


const Login = () => {
    return <View style={styles.container}>
        <StatusBar barsTyle={"light-content"} />
        <ScrollView style={{ flex: 1, paddingHorizontal: width(5), paddingVertical: height(1) }}>
            <Flex minHeight={height(55)} justifyContent={"space-between"}>
                <Header1 />
                <Center>
                    <Text fontFamily={"Poppins-Bold"} fontSize={20}>Connection</Text>
                </Center>
                <Stack height={height(35)} space={4} w="100%" mx="auto">
                    <Input type='text' variant="filled" size="md" placeholder="*Phone" isRequired />
                    <Input type='password' variant="filled" size="md" placeholder="*Mot de passe" isRequired />
                    <Text fontFamily={"Poppins-Regular"} fontSize={12}>*Champ obligatoire</Text>
                    <AuthFomFooter userExist={false} />
                </Stack>
            </Flex>
        </ScrollView>
        <CTAContainer text={"S'inscrire"} />
    </View>
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContents: {

    }
})