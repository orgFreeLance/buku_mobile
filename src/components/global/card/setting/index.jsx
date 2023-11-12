import { Text, View } from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import { TOUCHABLEOPACITY } from "../../../../constants";

const CardSetting = ({ Icon, content, onPress = () => { } }) => {
    return <TouchableOpacity onPress={onPress} activeOpacity={TOUCHABLEOPACITY}>
        <View style={styles.container}>
            {Icon}
            <Text color={"grey"}> {content}</Text>
        </View>
    </TouchableOpacity >
}
export default CardSetting
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        borderColor: 'black',
        borderRadius: 5,
        paddingHorizontal: 7.5,
        paddingVertical: 10,
        marginTop: 10,
        borderWidth: .5
    },
});
