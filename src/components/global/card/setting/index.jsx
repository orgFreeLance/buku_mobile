import { Text, View } from "native-base";
import { StyleSheet, Pressable } from "react-native";

const CardSetting = ({ Icon, content, onPress = () => { } }) => {
    return <Pressable onPress={onPress}>
        <View style={styles.container}>
            {Icon}
            <Text color={"grey"}> {content}</Text>
        </View>
    </Pressable >
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
