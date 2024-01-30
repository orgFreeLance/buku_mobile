import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { TOUCHABLEOPACITY, } from "../../../../constants";
import { TouchableOpacity } from "react-native";
import theme from "../../../../constants/theme";
const CardChoix = ({ active, onPress, name, reverse = false, width = false }) => {
    if (reverse) return <>
        <View style={width ? styles.btn : styles.btnFix}>
            <TouchableOpacity activeOpacity={TOUCHABLEOPACITY} onPress={onPress} style={{
                width: "100%",
                backgroundColor: active == name ? theme.colors.brand.secondary : theme.colors.brand.gray,
                paddingVertical: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                overflow: "hidden"
            }}>
                <Text style={{ color: active == name ? "white" : theme.colors.brand.secondary, textAlign: "center", fontWeight: "900", fontSize: 20 }}>{name}</Text>
            </TouchableOpacity>
        </View>
    </>
    return (
        <View style={width ? styles.btn : styles.btnFix}>
            <TouchableOpacity activeOpacity={TOUCHABLEOPACITY} onPress={onPress} style={{
                width: "100%",
                backgroundColor: active == name ? theme.colors.brand.secondary : theme.colors.brand.grayBold,
                paddingVertical: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                overflow: "hidden"
            }}>
                <Text style={{ color: active == name ? "white" : theme.colors.brand.secondary, textAlign: "center", fontWeight: "900", fontSize: 20 }}>{name}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CardChoix;

const styles = StyleSheet.create({

    btnFix: {
        width: "49.5%",
        height: "auto",
        overflow: "hidden"
    },
    btn: {
        height: "auto",
        width: "33%",
        overflow: "hidden"
    }

});
