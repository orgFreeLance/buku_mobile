import { ArrowForwardIcon, Flex, Button, Icon, ScrollView, StatusBar, Text, View } from 'native-base';
import * as React from 'react';
import { StyleSheet, } from 'react-native';
import { height, screenHeight, width } from '../../constants/nativeSizes';


const Login = () => {
    console.log({ height: height(10), screenHeight })
    return <View style={styles.container}>
        <StatusBar barsTyle={"dark-content"} />
        <ScrollView>

            <Text>Main</Text>
        </ScrollView>
        <Flex height={height(3)} backgroundColor={"white"} justifyContent={"center"} paddingX={width(5)} paddingY={height(1)}>
            <Button> <Text style={{fontFamily: "Poppins-Bold", fontSize: 20}}>S'inscrire</Text> </Button>
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