
import { ImageBackground, Text, View } from "react-native";
import theme from "../../../constants/theme";
const bg = require("../../../../assets/error/bg.jpeg");

export default function NoData({ items }) {
    if (items.length === 0) return <>
        <View style={{ width: "100%", padding: 10, flex: 1, backgroundColor: "white" }}>
            <Text style={{ textAlign: "center", color: theme.colors.brand.secondary, padding: 10, width: "100%", fontSize: 22, fontWeight: "500" }}>Aucune donnée trouvé</Text>
            <ImageBackground source={bg} style={{ width: "100%", flex: 1, height: 250 }} />
        </View>
    </>

}