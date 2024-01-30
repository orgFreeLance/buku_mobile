import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import userStore from "../../../store/user";
import theme from "../../../constants/theme";
import CardAvatarSettings from "../card/avatar/settings";
import ModalAccount from "../modal/account";
import { useState } from "react";

export default function ProfileAccount() {
    const { username, phoneNumber } = userStore()
    const [modal, setModal] = useState(false)
    const openModal = () => setModal(true)
    const closeModal = () => setModal(false)
    return <>
        <TouchableOpacity onPress={openModal} style={{
            height: "auto",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
            padding: 20,
            backgroundColor: theme.colors.brand.secondary,
            borderRadius: 10,
            borderBottomColor: theme.colors.brand.grayBold,
            borderBottomWidth: .8
        }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <CardAvatarSettings />
                <View style={{ width: "auto", paddingLeft: 10 }}>
                    <Text style={{ fontWeight: 500, fontSize: 24, color: "white" }}>{username}</Text>
                    <Text style={{ fontWeight: 400, fontSize: 16, color: "white" }}>{phoneNumber}</Text>

                </View>
            </View>
            <View style={{
                padding: 3,
                alignContent: "center",
                justifyContent: "center",
                borderRadius: 5,
            }}>
                <FontAwesome name="edit" size={14} color="white" />
            </View>
        </TouchableOpacity >
        <ModalAccount modal={modal} closeModal={closeModal} />
    </>
}