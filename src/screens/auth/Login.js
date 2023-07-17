import { Box, Center, Flex, Input, Pressable, ScrollView, Stack, StatusBar, Text, View } from 'native-base';
import * as React from 'react';
import { StyleSheet, } from 'react-native';
import CTAContainer from '../../componenents/organisms/CTAContainer';
import AuthForm from '../../componenents/organisms/AuthForm';
import theme from '../../constants/theme';


const Login = () => {
    return <View style={styles.container}>
        <StatusBar barsTyle={"light-content"} />
        <AuthForm title={"Connection"}>
            <Input backgroundColor={theme.colors.brand[500]} type='text' variant="filled" size="md" placeholder="*Phone" isRequired />
            <Input backgroundColor={theme.colors.brand[500]} type='password' variant="filled" size="md" placeholder="*Mot de passe" isRequired />
        </AuthForm>
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