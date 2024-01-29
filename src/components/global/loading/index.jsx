
import { View } from "native-base";
import CardBook from "../../global/card/book";
import { ActivityIndicator } from "react-native";
import theme from "../../../constants/theme";
export default function PageLoading({ loading, children, horizontal }) {
    if (loading)
        return <>
            <ActivityIndicator
                size="large"
                color={theme.colors.brand.secondary}
            />
            <View style={{ width: "100%", flex: 1, flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }}>
                <CardBook horizontal={horizontal} />
                <CardBook horizontal={horizontal} />
                <CardBook horizontal={horizontal} />
                <CardBook horizontal={horizontal} />
                <CardBook horizontal={horizontal} />
                <CardBook horizontal={horizontal} />
                <CardBook horizontal={horizontal} />
                <CardBook horizontal={horizontal} />
                <CardBook horizontal={horizontal} />
                <CardBook horizontal={horizontal} />
            </View>
        </>
    return <>
        {children}
    </>
}