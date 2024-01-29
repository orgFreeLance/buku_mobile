import { View } from "native-base";
import theme from "../../../constants/theme";

export default function ProgressBarBook({ items }) {
    return <>
        <View style={{
            height: 25,
            width: "100%",
            flexDirection: "row",
            justifyContent: "center", alignItems: "center",
            borderBottomColor: theme.colors.brand.grayBold,
            borderBottomWidth: 1,
            marginVertical: 5
        }}>
            {items.map(() => <View style={{ height: 10, marginHorizontal: 2.5, borderRadius: 10, width: 10, backgroundColor: theme.colors.brand.secondary50 }}>

            </View>)}
        </View>
    </>
}