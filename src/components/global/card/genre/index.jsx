import { View, Text } from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { TOUCHABLEOPACITY } from "../../../../constants";
import goTo from "../../../../utils/goTo";
import appStore from "../../../../store/app";
const bg = require('../../../../../assets/genre/bg.png')

export default function CardGenre({ fixSize = false, id, navigation, name = "", picture, ...rest }) {
    const { appChange } = appStore()
    return <>
        <View style={!fixSize ? styles.container : styles.containerFixSize}>
            <TouchableOpacity
                activeOpacity={TOUCHABLEOPACITY}
                onPress={() => {
                    appChange({ currentPage: { name, id, ...rest } })
                    goTo(navigation, "BookByGenre")
                }}
                style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 15,
                }}>
                <ImageBackground source={{ uri: picture }} style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 15,
                }}>
                    <ImageBackground source={bg}
                        style={{
                            height: "100%", width: "100%",
                            borderRadius: 15,
                        }}>
                        <View style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            padding: 10,
                            justifyContent: "flex-end",
                        }}>
                            <Text style={{ color: "white" }}>{name}</Text>
                        </View>
                    </ImageBackground>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    </>
}
const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 150,
        borderRadius: 15,
        marginRight: 5,
        overflow: "hidden",
        position: "relative"
    },
    containerFixSize: {
        height: 100,
        width: "48.5%",
        borderRadius: 15,
        marginBottom: 5,
        overflow: "hidden",
        position: "relative"
    },
})