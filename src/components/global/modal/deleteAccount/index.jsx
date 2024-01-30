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

export default function ModalDeleteAccount({
    modal = false,
    closeModal = () => { },
}) {
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const { confirmPassword, password,
        userChange
    } = userStore();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            password,
            confirmPassword,
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
                                <Text style={{ fontWeight: "700", fontSize: 24 }}>Supprimer le compte</Text>
                            </Pressable>
                            <View style={{ marginLeft: 10 }}>
                            </View>
                        </View>
                    </Modal.Header>
                    <Modal.Body style={{ width: "100%", justifyContent: "center" }}>
                        <Text style={{ textAlign: "left", fontSize: 16, color: "red" }}>Cette action est irreversible</Text>
                    </Modal.Body>
                    <Modal.Footer style={{ height: "auto", flexDirection: "row", justifyContent: "center" }}>
                        <ButtonMain
                            borderRadius={0}
                            width="49%"
                            onPress={handleSubmit(async (data) => {
                                userChange(data)
                                closeModal()
                            })}
                            content="Cancel"
                        />
                        <ButtonMain
                            borderRadius={0}
                            backgroundColor="red"
                            width="49%"
                            onPress={handleSubmit(async (data) => {
                                userChange(data)
                                closeModal()
                            })}
                            content="Supprimer"
                        />
                    </Modal.Footer>
                </Modal.Content>
            </Modal >
        </>
    );
}
