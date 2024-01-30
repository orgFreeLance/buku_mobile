import {
    Modal, Pressable,
    FormControl,
    Input,
    Stack,
} from "native-base";
import { Text, StyleSheet, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import React from "react";
import theme from "../../../../constants/theme";
import ButtonMain from "../../button/main";
import userStore from "../../../../store/user";
import CardAvatarAuth from "../../card/avatar/auth";

export default function ModalAccount({
    modal = false,
    closeModal = () => { },
}) {
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const {
        username,
        phoneNumber,
        pseudo,
        email,
        userChange
    } = userStore();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username,
            pseudo,
            email,
            phoneNumber
        },
    });

    return (
        <>
            <Modal
                isOpen={modal}
                onClose={closeModal}
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
            >
                <Modal.Content style={{
                    backgroundColor: "white", width: "90%",
                }}>
                    <Modal.CloseButton />
                    <Modal.Header style={{ justifyContent: "space-between", flexDirection: "row" }}>
                        <View style={{ justifyContent: "flex-start", alignItems: "center", flexDirection: "row" }}>
                            <Pressable onPress={closeModal}>
                                <Text style={{ fontWeight: "700", fontSize: 24 }}>Profil</Text>
                            </Pressable>
                            <View style={{ marginLeft: 10 }}>
                            </View>
                        </View>
                    </Modal.Header>
                    <Modal.Body style={{ width: "100%", justifyContent: "center" }}>

                        <FormControl isRequired>
                            <CardAvatarAuth />
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                    minLength: 2,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Stack style={{ marginBottom: 10 }}>
                                        <FormControl.Label>Nom complet</FormControl.Label>
                                        <Input

                                            style={{ paddingHorizontal: 10 }}
                                            type="text"
                                            keyboardType="text"
                                            placeholder="Nom complet"
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                        />

                                        {errors.username ? (
                                            <Text style={{ color: "red", fontSize: 10 }}>
                                                Aux moins 2 caractères sont requis.
                                            </Text>
                                        ) : (
                                            <Text>Doit comporter plus de 2 caractères.</Text>
                                        )}
                                    </Stack>
                                )}
                                name="username"
                            />
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                    minLength: 2,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Stack style={{ marginBottom: 10 }}>
                                        <FormControl.Label>Pseudo</FormControl.Label>
                                        <Input
                                            style={{ paddingHorizontal: 10 }}
                                            type="text"
                                            keyboardType="text"
                                            placeholder="Pseudo"
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                        />

                                        {errors.pseudo ? (
                                            <Text style={{ color: "red", fontSize: 10 }}>
                                                Aux moins 2 caractères sont requis.
                                            </Text>
                                        ) : (
                                            <Text>Doit comporter plus de 2 caractères.</Text>
                                        )}
                                    </Stack>
                                )}
                                name="pseudo"
                            />
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                    minLength: 2,

                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Stack style={{ marginBottom: 10 }}>
                                        <FormControl.Label>Email</FormControl.Label>
                                        <Input
                                            style={{ paddingHorizontal: 10 }}
                                            type="email"
                                            keyboardType="text"
                                            placeholder="Email"
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                        />

                                        {errors.email ? (
                                            <Text style={{ color: "red", fontSize: 10 }}>
                                                Aux moins 2 caractères sont requis.
                                            </Text>
                                        ) : (
                                            <Text>Doit comporter plus de 2 caractères.</Text>
                                        )}
                                    </Stack>
                                )}
                                name="email"
                            />
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                    minLength: 9,
                                    maxLength: 9,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Stack style={{ marginBottom: 10 }}>
                                        <FormControl.Label>Numero de téléphone</FormControl.Label>
                                        <Input
                                            InputLeftElement={
                                                <Text
                                                    style={{
                                                        paddingHorizontal: 5,
                                                        paddingVertical: 13,
                                                        backgroundColor: "white",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                    }}
                                                >
                                                    +243
                                                </Text>
                                            }
                                            style={{ paddingHorizontal: 10 }}
                                            type="text"
                                            keyboardType="numeric"
                                            placeholder="Numéro de téléphone"
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value.replaceAll("+243", '')}
                                        />

                                        {errors?.phoneNumber ? (
                                            <Text style={{ color: "red", fontSize: 10 }}>
                                                9 caractères sont requis.
                                            </Text>
                                        ) : (
                                            <Text>
                                                Doit comporter 9 caractères.
                                            </Text>
                                        )}
                                    </Stack>
                                )}
                                name="phoneNumber"
                            />
                        </FormControl>
                    </Modal.Body>
                    <Modal.Footer style={{ height: "auto" }}>
                        <ButtonMain
                            borderRadius={10}
                            width="100%"
                            onPress={handleSubmit(async (data) => {
                                userChange({ ...data, phoneNumber: `+243${data.phoneNumber}` })
                                closeModal()
                            })}
                            content="Enregistrer"
                        />
                    </Modal.Footer>
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
