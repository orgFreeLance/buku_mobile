import { Text, TouchableOpacity, View } from "react-native";
import { Foundation, Ionicons } from '@expo/vector-icons';
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
            borderBottomColor: theme.colors.brand.grayBold,
            borderBottomWidth: .8
        }}>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ textAlignVertical: "center", marginRight: 5, fontWeight: "500", }}>
                    <Foundation name="info" size={24} style={{ paddingRight: 10 }} color="black" />
                </Text>
                <Text style={{ textAlignVertical: "center", fontWeight: "500", }}>
                    À propos de Buku
                </Text>
            </View>
            <Text style={{ textAlignVertical: "center", fontWeight: "500" }}>
                <Ionicons name="chevron-forward" size={24} color="black" />
            </Text>
        </TouchableOpacity>
        <ModalAboutUs modal={modal} closeModal={closeModal} />
    </>
}