import { View } from "native-base";
import { ImageBackground, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
const bg = require("../../../../assets/error/Nodata.png")

export default function Error({ refresh }) {
    return <>
        <View style={{ paddingVertical: 10 }}>
            <Text onPress={refresh} style={{ textAlign: "center", fontWeight: "bold" }}>
                <FontAwesome name="refresh" size={24} color="black" />
                Actualiser
            </Text>

            <ImageBackground source={bg} style={{ width: "100%", height: 250 }} />
            <Text style={{ paddingVertical: 10, textAlign: "center" }}>Nous avons rencontré une erreur !</Text>
        </View>

    </>
}