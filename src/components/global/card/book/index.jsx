import { View } from "native-base";
import { StyleSheet } from "react-native";

export default function CardBook({ horizontal = true }) {
    return <>
        <View style={horizontal ? styles.containerHorizontal : styles.containerVertical}>

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
        width: "47.5%",
        borderRadius: 15,
        backgroundColor: "red",
        marginRight: 5,
        marginTop: 5
    }
})