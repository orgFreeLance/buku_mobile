import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BORDERRADIUS, TOUCHABLEOPACITY } from "../../../../constants";

const CardCategoryBook = ({ name }) => {
    return (
        <View style={{ marginRight: 5, marginBottom: 5, borderRadius: BORDERRADIUS, overflow: "hidden" }}>
            <TouchableOpacity activeOpacity={TOUCHABLEOPACITY}
            >
                <View backgroundColor={"gray.200"} style={{ padding: 5 }}><Text style={styles.title}>{name}</Text></View>
            </TouchableOpacity>
        </View>
    );
};

export default CardCategoryBook;

const styles = StyleSheet.create({
    title: {
        fontSize: 12,
        lineHeight: 30,
        fontWeight: "700",
        textAlign: "left",
        flexShrink: 1,
    },
});
