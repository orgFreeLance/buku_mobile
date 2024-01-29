import { Modal, Pressable, Box, Slider } from "native-base";
import React from "react";
import theme from "../../../../constants/theme";
import userStore from "../../../../store/user";
import { Text, StyleSheet, View } from "react-native";
import ButtonMain from "../../button/main";
import appStore from "../../../../store/app";
import CardAuthCategory from "../../card/category";

export default function ModalFilter({
    modal = false,
    navigation,
    closeModal = () => { },
}) {
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const { userChange } = userStore()
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
                    backgroundColor: "white", width: "100%",
                    marginBottom: 0,
                    marginTop: "auto"
                }}>
                    <Modal.CloseButton />
                    <Modal.Header style={{ justifyContent: "space-between", flexDirection: "row" }}>
                        <View style={{ justifyContent: "flex-start", alignItems: "center", flexDirection: "row" }}>
                            <Pressable onPress={closeModal}>
                                <Text style={{ fontWeight: "700", fontSize: 24 }}>Filtre</Text>
                            </Pressable>
                            <View style={{ marginLeft: 10 }}>
                            </View>
                        </View>
                    </Modal.Header>
                    <Modal.Body style={{ width: "100%", justifyContent: "center" }}>
                        <Text style={{ fontWeight: "700", fontSize: 20 }}>Catégories</Text>
                        <View
                            style={{
                                paddingVertical: 10,
                                width: "100%",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                justifyname: "flex-start",
                                marginTop: 5,
                            }}
                        >
                            {categories.map(({ attributes: { name }, id, select }, index) => {
                                return (
                                    <View style={{ marginTop: 5, marginRight: 5, borderRadius: 20, overflow: "hidden" }}
                                        key={index}>
                                        <CardAuthCategory
                                            name={name}
                                            onPress={onPress}
                                            select={select}
                                            index={index}
                                            key={id}
                                        />
                                    </View>
                                )
                            })}
                        </View>
                        <Text style={{ fontWeight: "700", fontSize: 20 }}>Pieces</Text>
                        <Box alignItems="center" w="100%" style={{
                            paddingVertical: 10,
                            width: "100%",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyname: "flex-start",
                            marginTop: 5,
                        }}>
                            <Slider size="lg" onChange={v => {
                                setOnChangeValue(Math.floor(v));
                            }} w="full" defaultValue={onChangeValue} minValue={0} maxValue={1000} accessibilityLabel="piece" step={10}>
                                <Slider.Track>
                                    <Slider.FilledTrack />
                                </Slider.Track>
                                <Slider.Thumb borderWidth="0" bg={theme.colors.brand.secondary}>
                                </Slider.Thumb>
                            </Slider>
                            <Text>0 à {onChangeValue} Pieces</Text>

                        </Box>
                        <ButtonMain content="Recherche" />
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
