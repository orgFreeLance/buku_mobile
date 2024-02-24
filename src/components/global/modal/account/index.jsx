import {
    Modal, Pressable,
    FormControl,
    Input,
    Stack,
} from "native-base";
import { Text, View, ActivityIndicator } from "react-native";
import { useForm, Controller } from "react-hook-form";
import React, { useState } from "react";
import ButtonMain from "../../button/main";
import userStore from "../../../../store/user";
import CardAvatarAuth from "../../card/avatar/auth";
import { updateUser } from "../../../../constants/url";
import { headers } from "../../../../constants";
import ModalContainer from "../notification";
import ImageViewer from "../../imageViewer";
import theme from "../../../../constants/theme";
import { err } from "react-native-svg";

const signup_bg_success = require("../../../../../assets/notifications/signupSuccess.png");

export default function ModalAccount({
    modal = false,
    closeModal = () => { },
}) {
    const initialRef = React.useRef(null);
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const finalRef = React.useRef(null);
    const {
        username,
        id,
        phoneNumber,
        pseudo,
        email,
        picture,
        userChange
    } = userStore();

    const openSuccess = () => {
        setSuccess(true)

    }
    const closeSuccess = () => {
        setError(false)
        setSuccess(false)
        closeModal()
    }
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            picture,
            username,
            pseudo,
            email,
            phoneNumber
        },
    });
    const submit = () => {
        setLoading(true)
        fetch(updateUser(id), {
            method: "POST",
            body: JSON.stringify({
                data: {
                    picture,
                    username,
                    phoneNumber,
                    pseudo,
                    email,
                }
            }),
            headers

        }).then(async res => {
            const status = res.status
            const data = await res.json()
            return ({ ...data, status })
        }).then(({ status }) => {
            setLoading(false)
            openSuccess()
        }).catch((error) => {
            setError(true)
            setLoading(false)
        })
    }

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
                            loading={loading}
                            borderRadius={10}
                            width="100%"
                            onPress={handleSubmit(async (data) => {
                                userChange({ ...data, phoneNumber: `+243${data.phoneNumber}` })
                                submit()
                            })}
                            content={!loading ? "Enregistrer" :
                                <ActivityIndicator
                                    color={"white"}
                                />}
                        />
                    </Modal.Footer>
                    <ModalContainer
                        modal={success}
                        children={
                            <>
                                {error ? <>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignContent: "center",
                                            justifyContent: "center",
                                            width: "100%",
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        <ImageViewer selectedImage={signup_bg_success} />
                                        <Text
                                            style={{
                                                fontSize: 32,
                                                fontWeight: "600",
                                                paddingVertical: 10,
                                                color: theme.colors.brand.secondary,
                                            }}
                                        >
                                            Modification échouée
                                        </Text>
                                        <Text
                                            style={{ width: "80%", textAlign: "center", fontSize: 14 }}
                                        >
                                            votre compte n'a pas été modifié.
                                        </Text>
                                    </View>
                                </> : <>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignContent: "center",
                                            justifyContent: "center",
                                            width: "100%",
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        <ImageViewer selectedImage={signup_bg_success} />
                                        <Text
                                            style={{
                                                fontSize: 32,
                                                fontWeight: "600",
                                                paddingVertical: 10,
                                                color: theme.colors.brand.secondary,
                                            }}
                                        >
                                            Modification réussie
                                        </Text>
                                        <Text
                                            style={{ width: "80%", textAlign: "center", fontSize: 14 }}
                                        >
                                            votre compte a été modifié.
                                        </Text>
                                    </View>
                                </>}
                            </>
                        }
                        closeModal={closeSuccess}
                    />
                </Modal.Content>
            </Modal >
        </>
    );
}
