import { View } from "native-base";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TOUCHABLEOPACITY } from "../../../../constants";

export default function CardGenre({ fixSize = false, navigation }) {
    return <>
        <View style={!fixSize ? styles.container : styles.containerFixSize}>
            <TouchableOpacity
                activeOpacity={TOUCHABLEOPACITY}
                style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 15,
                }}>

            </TouchableOpacity>
        </View>
    </>
}
const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 150,
        borderRadius: 15,
        backgroundColor: "red",
        marginRight: 5,
    },
    containerFixSize: {
        height: 100,
        width: "48.5%",
        borderRadius: 15,
        backgroundColor: "red",
        marginBottom: 5
    },

})