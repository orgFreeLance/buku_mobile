import { View } from "native-base";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TOUCHABLEOPACITY } from "../../../../constants";
import goTo from "../../../../utils/goTo";

export default function CardBook({ horizontal = true, navigation }) {
    return <>
        <View style={horizontal ? styles.containerHorizontal : styles.containerVertical}>
            <TouchableOpacity
                activeOpacity={TOUCHABLEOPACITY}
                onPress={() => {
                    goTo(navigation, "Book")
                }}
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
    containerHorizontal: {
        height: 300,
        width: 175,
        borderRadius: 15,
        backgroundColor: "red",
        marginRight: 5,
        marginTop: 5
    },
    containerVertical: {
        height: 300,
        width: "48.5%",
        borderRadius: 15,
        backgroundColor: "red",
        marginTop: 5
    }
})