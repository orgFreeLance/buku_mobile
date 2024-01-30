import { Text, View } from "react-native";
import theme from "../../../../constants/theme";

export default function CardRatingProgress({ pourcentage = 80, number = 5 }) {
    return <>
        <View style={{ flexDirection: "row", alignItems: "center", alignContent: "center", marginBottom: 5 }}>
            <Text style={{ textAlignVertical: "center", marginRight: 3 }}>{number}</Text>
            <View style={{
                position: "relative",
                borderRadius: 5,
                height: 7.5,
                width: `${pourcentage * 2}%`,
                backgroundColor: theme.colors.brand.secondary
            }}>
                <View style={{ position: "absolute", borderRadius: 10, right: 0, transform: [{ translateX: 25 }, { translateY: -4 }] }}>
                    <Text >{pourcentage}%</Text>
                </View>
            </View>
        </View>
    </>
}