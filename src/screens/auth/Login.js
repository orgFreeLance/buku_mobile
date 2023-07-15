import { Box, ScrollView, StatusBar, Text, View } from 'native-base';
import * as React from 'react';
import { StyleSheet, } from 'react-native';


const Login = () => {
    return <View style={styles.container}>
        <StatusBar barsTyle={"dark-content"} />
        <ScrollView>

            <Text>Main</Text>
        </ScrollView>
        <Box>
            <Text>Bottom</Text>
        </Box>
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