import { View } from "native-base";
import { StyleSheet } from "react-native";
import theme from "../../../../constants/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TOUCHABLEOPACITY } from "../../../../constants";

export default function CardCoin() {
    return <View style={styles.card}>
        <TouchableOpacity activeOpacity={TOUCHABLEOPACITY}>
            <View style={styles.header}>

            </View>
            <View style={styles.footer}>

            </View>
        </TouchableOpacity>

    </View>
}
const styles = StyleSheet.create({
    card: {
        height: 100,
        width: "32%",
        overflow: "hidden",
        borderColor: theme.colors.brand.secondary,
        borderWidth: .5,
        marginBottom: 5,
        borderRadius: 5
    },
    header: {
        height: 70,
    },
    footer: {
        height: 30,
        width: "100%",
        backgroundColor: theme.colors.brand.secondary
    }
})