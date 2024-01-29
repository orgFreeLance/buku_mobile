import { View } from "native-base";
import theme from "../../../constants/theme";

export default function ProgressBarBook({ items }) {
    return <>
        <View style={{
            height: 15,
            width: "100%",
            flexDirection: "row",
            justifyContent: "center", alignItems: "center",
            borderBottomColor: theme.colors.brand.grayBold,
            borderBottomWidth: 1,
            marginVertical: 5
        }}>

        </View>
    </>
}