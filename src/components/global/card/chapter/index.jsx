import { View } from "native-base";
import { StyleSheet } from "react-native";

export default function CardChapter() {
    return <>
        <View style={styles.card}></View>
    </>
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        height: 100,
        marginBottom: 5,
        borderRadius: 10,
        backgroundColor: "red"
    }
});