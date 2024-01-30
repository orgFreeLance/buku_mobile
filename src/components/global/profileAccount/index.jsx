import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
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
            justifyContent: "space-start",
            alignContent: "center",
            alignItems: "center",
            padding: 20,
            paddingHorizontal: 0,
            borderBottomColor: theme.colors.brand.grayBold,
            borderBottomWidth: .8
        }}>
            <CardAvatarSettings />
            <View style={{ width: "70%", paddingLeft: 10, position: "relative" }}>
                <Text style={{ fontWeight: 500, fontSize: 24, color: theme.colors.brand.secondary }}>{username}</Text>
                <Text style={{ fontWeight: 400, fontSize: 16 }}>{phoneNumber}</Text>
                <TouchableOpacity style={{
                    position: "absolute",
                    zIndex: 50,
                    top: 8,
                    right: 8,
                    padding: 3,
                    alignContent: "center",
                    justifyContent: "center",
                    backgroundColor: theme.colors.brand.secondary,
                    borderRadius: 5,
                }}>
                    <FontAwesome name="edit" size={14} color="white" />
                </TouchableOpacity>
            </View>
        </View >
    </>
}