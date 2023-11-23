import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { TOUCHABLEOPACITY, } from "../../../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import theme from "../../../../constants/theme";
const CardChoix = ({ active, onPress, name }) => {
    return (
        <View style={styles.btn}>
            <TouchableOpacity activeOpacity={TOUCHABLEOPACITY} onPress={onPress} style={{
                width: "100%",
                backgroundColor: active == name ? theme.colors.brand.secondary : "black",
                paddingVertical: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                overflow: "hidden"
            }}>
                <Text style={{ color: "white", textAlign: "center" }}>{name}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CardChoix;

const styles = StyleSheet.create({

    btn: {
        width: "49.5%",
        height: "auto",
        borderRadius: 10,
    },

});
