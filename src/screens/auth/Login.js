import { ArrowForwardIcon, Flex, Button, Icon, ScrollView, StatusBar, Text, View } from 'native-base';
import * as React from 'react';
import { StyleSheet, } from 'react-native';
import { height, screenHeight, width } from '../../constants/nativeSizes';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../constants/theme';
import CTAButton from '../../componenents/atoms/CTAButtons';


const Login = () => {
    return <View style={styles.container}>
        <StatusBar barsTyle={"dark-content"} />
        <ScrollView>

            <Text>Main</Text>
        </ScrollView>
        <Flex height={height(2.5)} backgroundColor={"white"} justifyContent={"center"} paddingX={width(5)} >
            <CTAButton text={"S'inscrire"} />
        </Flex>
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