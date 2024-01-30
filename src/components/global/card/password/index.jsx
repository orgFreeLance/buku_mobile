import { Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import theme from "../../../../constants/theme";
import { useState } from "react";
import ModalPassword from "../../modal/password";

export default function CardPassword() {
    const [modal, setModal] = useState(false)
    const openModal = () => setModal(true)
    const closeModal = () => setModal(false)
    return <>
        <TouchableOpacity onPress={openModal} style={{
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
            <Text style={{ textAlignVertical: "center", marginRight: 5 }}>
                <MaterialIcons name="lock" size={24} style={{ paddingRight: 10 }} color="black" />
            </Text>
            <Text style={{ textAlignVertical: "center", fontWeight: "500", }}>
                Mot de passe
            </Text>
        </TouchableOpacity>
        <ModalPassword modal={modal} closeModal={closeModal} />
    </>
}