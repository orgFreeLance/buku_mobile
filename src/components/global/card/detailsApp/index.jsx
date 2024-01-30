import { Text, TouchableOpacity } from "react-native";
import { Foundation } from '@expo/vector-icons';
import theme from "../../../../constants/theme";
import { useState } from "react";
import ModalAboutUs from "../../modal/aboutUs";

export default function CardDetailsApp() {
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
            paddingHorizontal: 0,
            borderBottomColor: theme.colors.brand.grayBold,
            borderBottomWidth: .8
        }}>
            <Text style={{ textAlignVertical: "center", fontWeight: "500", }}>
                <Foundation name="info" size={24} style={{ paddingRight: 10 }} color="black" />  À propos de Buku
            </Text>
        </TouchableOpacity>
        <ModalAboutUs modal={modal} closeModal={closeModal} />
    </>
}