import { Flex, ScrollView, StatusBar, Text, View } from 'native-base';
import * as React from 'react';
import { StyleSheet, } from 'react-native';
import CTAContainer from '../../componenents/organisms/CTAContainer';
import { Image } from 'expo-image';
import { height, width } from '../../constants/nativeSizes';
import BillsStatus from '../../componenents/molecules/BillsStatus';

const logo = require("../../../assets/Logo.png");

const Login = () => {
    return <View style={styles.container}>
        <StatusBar barsTyle={"light-content"} />
        <ScrollView style={{ paddingHorizontal: width(5), paddingVertical: height(1) }}>
            <Flex>
                <Flex direction='row' justifyContent={"space-between"}>
                    <View style={{ width: 120, height: 32 }}>
                        <Image style={{ width: "100%", height: 32 }} source={logo} contentFit="contain"
                            transition={1000} />
                    </View>
                    <BillsStatus />
                </Flex>
                <Flex>
                    <Text>Title</Text>
                </Flex>
                <Flex>
                    <Text>Form</Text>
                </Flex>
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