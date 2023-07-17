import { Flex, ScrollView, StatusBar, Text, View } from 'native-base';
import * as React from 'react';
import { StyleSheet, } from 'react-native';
import CTAContainer from '../../componenents/organisms/CTAContainer';
import { height, width } from '../../constants/nativeSizes';
import Header1 from '../../componenents/organisms/Header1';


const Login = () => {
    return <View style={styles.container}>
        <StatusBar barsTyle={"light-content"} />
        <ScrollView style={{ paddingHorizontal: width(5), paddingVertical: height(1) }}>
            <Flex>
                <Header1 />
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