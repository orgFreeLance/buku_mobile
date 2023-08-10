import { Input, StatusBar, View } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, } from 'react-native';
import CTAContainer from '../../componenents/organisms/CTAContainer';
import AuthForm from '../../componenents/organisms/AuthForm';
import theme from '../../constants/theme';
import userStore from '../../store/user';
import { shallow } from "zustand/shallow";
import { useToast } from 'native-base';
import { submitForm } from '../../utils/sbmitAuth';


const Login = ({ navigation }) => {
    const toast = useToast();
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsloading] = useState(false);
    const [logUser, isAuth,] = userStore((state) => [state.logUser, state.isAuth], shallow);



    return <View style={styles.container}>
        <StatusBar barsTyle={"light-content"} />
        <AuthForm title={"Connexion"} navigation={navigation} userExist={false}>
            <Input onChangeText={(value) => {
                setPhone(value);
            }} backgroundColor={theme.colors.brand[500]} type='text' variant="filled" size="md" placeholder="*Phone" isRequired />
            <Input onChangeText={(value) => {
                setPassword(value);
            }} backgroundColor={theme.colors.brand[500]} type='password' variant="filled" size="md" placeholder="*Mot de passe" isRequired />
        </AuthForm>
        <CTAContainer onPress={() => {
            setIsloading(true)
            submitForm(true, setIsloading, logUser, isAuth, toast, phone, password)
            setIsloading(false)
        }} text={"Se connecter"} isLoading={isLoading} />
    </View>
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContents: {

    }
});