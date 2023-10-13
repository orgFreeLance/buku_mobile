import { View } from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TOUCHABLEOPACITY } from "../../../../constants";
import goTo from "../../../../utils/goTo";

export default function CardGenre({ fixSize = false, navigation, name = "", picture }) {
    return <>
        <View style={!fixSize ? styles.container : styles.containerFixSize}>
            <TouchableOpacity
                activeOpacity={TOUCHABLEOPACITY}
                onPress={() => {
                    goTo(navigation, "BookByGenre")
                }}
                style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 15,
                }}>
                <ImageBackground source={{ uri: picture }} style={{
                    height: "100%", width: "100%",
                    borderRadius: 15,
                }}>

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
        overflow: "hidden"
    },
    containerFixSize: {
        height: 100,
        width: "48.5%",
        borderRadius: 15,
        marginBottom: 5,
        overflow: "hidden"
    },

})