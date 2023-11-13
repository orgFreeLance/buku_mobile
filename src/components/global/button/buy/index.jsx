import { Text, View } from "native-base";
import { BORDERRADIUS, TOUCHABLEOPACITY } from "../../../../constants";
import { TouchableOpacity } from "react-native";

export default function ButtonBuy({ color = "red", name, onPress }) {
    return <>
        <View style={{ width: "50%", backgroundColor: color, borderRadius: BORDERRADIUS, overflow: "hidden" }}>
            <TouchableOpacity activeOpacity={TOUCHABLEOPACITY} onPress={() => {
                console.log("click z")
                onPress()
            }} style={{ padding: 10, }}>
                <Text style={{ textAlign: "center", color: "white" }}>{name}</Text>
            </TouchableOpacity>
        </View>
    </>
}