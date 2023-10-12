import {
    Text,
    View,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { width } from "../../../../constants/nativeSizes";
import theme from "../../../../constants/theme";
import goTo from "../../../../utils/goTo";
import { OPACITY, TOUCHABLEOPACITY } from "../../../../constants";


const CardLinkFooter = ({ Icon, text, condition, navigation, screen }) => {
    return <TouchableOpacity
        activeOpacity={TOUCHABLEOPACITY} onPress={() => {
            goTo(navigation, screen)
        }}>
        <View style={!condition ? styles.link : styles.link_hover} >
            {Icon}
            <Text color={condition ? "grey" : theme.colors.brand.secondary} style={{ fontSize: 12, textTransform: "lowercase" }}>{text}</Text>
        </View>
    </TouchableOpacity>
}

export default CardLinkFooter;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 60, width: "100%",
        paddingHorizontal: width(5), flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "white"
    },
    avatar: {
        height: 50,
        width: 50,
        backgroundColor: theme.colors.brand.secondary,
        borderRadius: 50,
    },
    title: {
        paddingTop: 20,
        fontSize: 20,
        fontWeight: "700",
        color: "black"
    },
    link: {
        justifyContent: "center",
        padding: width(1),
        alignItems: "center",
    },
    link_hover: {
        justifyContent: "center",
        padding: width(1),
        alignItems: "center",
        opacity: OPACITY
    }
});
