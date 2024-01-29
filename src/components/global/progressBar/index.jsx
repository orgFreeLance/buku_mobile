import { View } from "native-base";
import theme from "../../../constants/theme";

export default function ProgressBarBook({ items }) {
    return <>
        <View style={{
            height: 30,
            width: "100%",
            backgroundColor: "red",
            flexDirection: "row"
        }}>
            {items.map(() => <View style={{ height: 10, borderRadius: 10, width: 10, backgroundColor: theme.colors.brand.secondary }}>

            </View>)}
        </View>
    </>
}