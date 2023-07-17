import { Flex, ScrollView, StatusBar, Text, View } from 'native-base';
import * as React from 'react';
import { StyleSheet, } from 'react-native';
import CTAContainer from '../../componenents/organisms/CTAContainer';
import { Image } from 'expo-image';
import { height, width } from '../../constants/nativeSizes';
import theme from '../../constants/theme';
import CustomIcon from '../../componenents/atoms/CustomIcon';

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
const logo = require("../../../assets/Logo.png");
const billIcon = require("../../../assets/biil-icon.png");

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
                    <Flex direction='row'>
                        <Flex>
                            <Text fontFamily={"Poppins-SemiBold"} color={theme.colors.brand[600]}>00</Text>
                        </Flex>
                        <CustomIcon iconModule={billIcon} width={27} height={27}/>
                    </Flex>
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