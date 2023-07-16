import { ScrollView, StatusBar, Text, View } from 'native-base';
import * as React from 'react';
import { StyleSheet, } from 'react-native';
import CTAContainer from '../../componenents/organisms/CTAContainer';


const Login = () => {
    return <View style={styles.container}>
        <StatusBar barsTyle={"light-content"} />
        <ScrollView>

            <Text>Main</Text>
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