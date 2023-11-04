import { Modal, Pressable, Text, View } from "native-base";
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import React from "react";
import theme from "../../../../constants/theme";
import userStore from "../../../../store/user";
import { ImageBackground, StyleSheet } from "react-native";
import goTo from "../../../../utils/goTo";
import CardSetting from "../../card/setting";
const avatar = require("../../../../../assets/avatar.jpeg");

export default function ModalMenu({
    modal = false,
    navigation,
    closeModal = () => { },
}) {
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const { picture, username, userChange, serialNumber } = userStore()

    const Deconnexion = () => {
        userChange({ isAuth: false })
        goTo(navigation, "Welcome")
    }

    const goToProfile = () => {
        goTo(navigation, "UserProfile")
    }

    return (
        <>
            <Modal
                isOpen={modal}
                onClose={closeModal}
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
            >
                <Modal.Content style={{ backgroundColor: "white" }}>
                    <Modal.CloseButton />
                    <Modal.Header style={{ justifyContent: "space-between", flexDirection: "row" }}>
                        <View style={{ justifyContent: "flex-start", alignItems: "center", flexDirection: "row" }}>
                            <Pressable onPress={closeModal}>
                                <View style={{ position: "relative" }}>
                                    <View style={{
                                        overflow: "hidden",
                                        borderRadius: 50,
                                        borderColor: "white",
                                        borderWidth: 2,
                                    }}>
                                        <ImageBackground source={picture ? { uri: picture } : avatar} style={styles.avatar} />
                                    </View>
                                    <View style={{ height: 15, width: 15, borderRadius: 20, borderWidth: 2, borderColor: "white", backgroundColor: "green", position: "absolute", top: 0, zIndex: 50, right: 0 }}></View>
                                </View>
                            </Pressable>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontWeight: "700" }}>{username}</Text>
                                <Text>{serialNumber}</Text>
                            </View>
                        </View>
                    </Modal.Header>
                    <Modal.Body style={{ width: "100%", justifyContent: "center" }}>
                        <CardSetting content={"Mon profil"} Icon={<FontAwesome name="user-circle" size={20} color="grey" />} onPress={goToProfile} />
                        <CardSetting content={"Déconnexion"} Icon={<MaterialIcons name="logout" size={20} color="grey" />} onPress={Deconnexion} />
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: { height: 80, width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
    avatar: {
        height: 50,
        width: 50,
        backgroundColor: theme.colors.brand.secondary,
        borderRadius: 50,
    },
    title: {
        paddingTop: 20,
        fontSize: 24,
        fontWeight: "700",
        color: "white"
    },
    link: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.brand.secondary,
        borderRadius: 50
    },
    link_hover: {
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 60
    }
});
