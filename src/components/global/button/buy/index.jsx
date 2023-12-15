import { Text, View } from "native-base";
import { BORDERRADIUS, TOUCHABLEOPACITY } from "../../../../constants";
import { TouchableOpacity } from "react-native";

export default function ButtonBuy({ color = "red", name, onPress, width = "50%" }) {
    return <>
        <View style={{ width, backgroundColor: color, overflow: "hidden" }}>
            <TouchableOpacity activeOpacity={TOUCHABLEOPACITY} onPress={() => {
                onPress()
            }} style={{ padding: 10, }}>
                <Text style={{ textAlign: "center", color: "white" }}>{name}</Text>
            </TouchableOpacity>
        </View>
    </>
}