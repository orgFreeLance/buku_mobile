import { Text, View } from "react-native";
import theme from "../../../../constants/theme";

export default function CardRatingProgress({ pourcentage = 80, number = 5 }) {
    return <>
        <View style={{ flexDirection: "row", alignItems: "center", alignContent: "center", marginBottom: 5 }}>
            <Text style={{ textAlignVertical: "center", marginRight: 5 }}>{number}</Text>
            <View style={{
                position: "relative",
                borderRadius: 5,
                height: 7.5,
                width: `${pourcentage}%`,
                backgroundColor: theme.colors.brand.secondary
            }}>

                <View style={{ position: "absolute",height:20, borderRadius: 10, padding: 2, top: 0, right: 0, transform: [{ translateX: 10 }, { translateY: -5 }] }}>
                    <Text >{pourcentage}%</Text>
                </View>
            </View>
        </View>
    </>
}