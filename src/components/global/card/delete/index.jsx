import { Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from "../../../../constants/theme";
import { useState } from "react";
import ModalPassword from "../../modal/password";
import ModalDeleteAccount from "../../modal/deleteAccount";

export default function CardDelete() {
    const [modal, setModal] = useState(false)
    const openModal = () => setModal(true)
    const closeModal = () => setModal(false)
    return <>
        <TouchableOpacity onPress={openModal} style={{
            height: 80,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-start",
            alignContent: "center",
            alignItems: "center",
            padding: 20,
            borderRadius: 10, marginTop: 20,
            backgroundColor: theme.colors.brand.red,
        }}>
            <Text style={{ textAlignVertical: "center", marginRight: 5 }}>
                <MaterialCommunityIcons name="delete" size={24} style={{ paddingRight: 10 }} color="black" />
            </Text>
            <Text style={{ textAlignVertical: "center", fontWeight: "500", }}>
                Supprimer le compte
            </Text>
        </TouchableOpacity>
        <ModalDeleteAccount modal={modal} closeModal={closeModal} />
    </>
}