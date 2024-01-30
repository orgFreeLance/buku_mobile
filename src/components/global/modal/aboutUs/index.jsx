import { Modal, Pressable, Box, Slider } from "native-base";
import React from "react";
import theme from "../../../../constants/theme";
import { Text, StyleSheet, View } from "react-native";
import ButtonMain from "../../button/main";
import appStore from "../../../../store/app";
import CardAuthCategory from "../../card/category";

export default function ModalAboutUs({
    modal = false,
    closeModal = () => { },
}) {
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const { categories, appChange } = appStore()
    const [onChangeValue, setOnChangeValue] = React.useState(1);

    const onPress = (current) => {
        const setCategories = () => {
            return categories.map((item, index) => {
                if (current == index) {
                    const select = item.select ? false : true
                    return { ...item, select };
                }
                return item
            });
        }
        appChange({ categories: setCategories(categories) });
    };
    return (
        <>
            <Modal
                isOpen={modal}
                onClose={closeModal}
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
            >
                <Modal.Content style={{
                    backgroundColor: "white", width: "95%",
                }}>
                    <Modal.CloseButton />
                    <Modal.Header style={{ justifyContent: "space-between", flexDirection: "row" }}>
                        <View style={{ justifyContent: "flex-start", alignItems: "center", flexDirection: "row" }}>
                            <Pressable onPress={closeModal}>
                                <Text style={{ fontWeight: "700", fontSize: 24 }}>À propos de BUKU</Text>
                            </Pressable>
                            <View style={{ marginLeft: 10 }}>
                            </View>
                        </View>
                    </Modal.Header>
                    <Modal.Body style={{ width: "100%", justifyContent: "center" }}>

                    </Modal.Body>
                </Modal.Content>
            </Modal >
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
