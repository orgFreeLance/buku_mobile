import {
    Modal, Pressable,
    FormControl,
    Input,
    Stack,
} from "native-base";
import { Text, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import React from "react";
import ButtonMain from "../../button/main";
import userStore from "../../../../store/user";

export default function ModalPassword({
    modal = false,
    closeModal = () => { },
}) {
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const {
        userChange
    } = userStore();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            password: "",
            newPassword: "",
            confirmPassword: "",
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
                                <Text style={{ fontWeight: "700", fontSize: 24 }}>Configuration Mot de passe</Text>
                            </Pressable>
                            <View style={{ marginLeft: 10 }}>
                            </View>
                        </View>
                    </Modal.Header>
                    <Modal.Body style={{ width: "100%", justifyContent: "center" }}>

                        <FormControl isRequired>
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                    minLength: 6,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Stack style={{ marginBottom: 10 }}>
                                        <FormControl.Label>Ancien Mot de passe</FormControl.Label>
                                        <Input

                                            style={{ paddingHorizontal: 10 }}
                                            type="password"
                                            keyboardType="text"
                                            placeholder="Ancien Mot de passe"
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                        />

                                        {errors.password ? (
                                            <Text style={{ color: "red", fontSize: 10 }}>
                                                Aux moins 6 caractères sont requis.
                                            </Text>
                                        ) : (
                                            <Text>Doit comporter plus de 5 caractères.</Text>
                                        )}
                                    </Stack>
                                )}
                                name="password"
                            />
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                    minLength: 6,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Stack style={{ marginBottom: 10 }}>
                                        <FormControl.Label>Nouveau Mot de passe</FormControl.Label>
                                        <Input

                                            style={{ paddingHorizontal: 10 }}
                                            type="password"
                                            keyboardType="text"
                                            placeholder="Nouveau Mot de passe"
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                        />

                                        {errors.newPassword ? (
                                            <Text style={{ color: "red", fontSize: 10 }}>
                                                Aux moins 6 caractères sont requis.
                                            </Text>
                                        ) : (
                                            <Text>Doit comporter plus de 5 caractères.</Text>
                                        )}
                                    </Stack>
                                )}
                                name="newPassword"
                            />
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                    minLength: 6,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Stack style={{ marginBottom: 10 }}>
                                        <FormControl.Label>Confirmer le mot de passe</FormControl.Label>
                                        <Input
                                            style={{ paddingHorizontal: 10 }}
                                            type="password"
                                            keyboardType="text"
                                            placeholder="Confirmer le mot de passe"
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                        />

                                        {errors.confirmPassword ? (
                                            <Text style={{ color: "red", fontSize: 10 }}>
                                                Aux moins 6 caractères sont requis.
                                            </Text>
                                        ) : (
                                            <Text>Doit comporter plus de 5 caractères.</Text>
                                        )}
                                    </Stack>
                                )}
                                name="confirmPassword"
                            />
                        </FormControl>
                    </Modal.Body>
                    <Modal.Footer style={{ height: "auto" }}>
                        <ButtonMain
                            borderRadius={10}
                            width="100%"
                            onPress={handleSubmit(async (data) => {
                                userChange(data)
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
