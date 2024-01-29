import { Text, View } from "react-native";
import userStore from "../../../store/user";
import theme from "../../../constants/theme";
import CardAvatarSettings from "../card/avatar/settings";

export default function ProfileAccount() {
    const { username, phoneNumber } = userStore()
    return <>
        <View style={{
            height: "auto",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
            padding: 20,
            paddingHorizontal: 0,
            borderBottomColor: theme.colors.brand.grayBold,
            borderBottomWidth: .8
        }}>
            <CardAvatarSettings />
            <View style={{ width: "100%", paddingLeft: 10 }}>
                <Text style={{ fontWeight: 500, fontSize: 24, alignItems: "center", color: theme.colors.brand.secondary }}>{username}</Text>
                <Text style={{ fontWeight: 400, fontSize: 16 }}>{phoneNumber}</Text>
            </View>
        </View >
    </>
}