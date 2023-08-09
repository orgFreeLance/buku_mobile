import { create } from "zustand";
import API from "../services/axios";
import * as SecureStore from "expo-secure-store";

const userStore = create((set) => ({
    isAuth: false,
    confirmed: false,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    authError: "",
    id: "",
    codeExetat: "",
    logUser: async (phoneNumber, password) => {
        let error = false;
        let firstChar = phoneNumber[0];
        firstChar = "+243";
        const phone = firstChar + phoneNumber.slice(1);
        const data = {
            phoneNumber: phone,
            password,
        };

        const response = await API.post("/authentification/login", {
            data,
        }).catch((reason) => {
            error = true;
            console.log({ reason });
        });
        if (!error) {
            const responseData = response.data;

            await SecureStore.setItemAsync("token", responseData.jwt);
            await SecureStore.setItemAsync("firstName", responseData.firstName);
            await SecureStore.setItemAsync(
                "phoneNumber",
                responseData.phoneNumber
            );
            await SecureStore.setItemAsync("lastName", responseData.lastName);
            await SecureStore.setItemAsync("email", responseData.email);
            await SecureStore.setItemAsync("id", `${responseData.id}`);
            await SecureStore.setItemAsync("isAuth", "1");
            await SecureStore.setItemAsync("confirmed", "1");

            return set((state) => ({
                firstName: responseData.firstName,
                phoneNumber: responseData.phoneNumber,
                lastName: responseData.lastName,
                email: responseData.email,
                id: responseData.id,
                isAuth: true,
                confirmed: true,
            }));
        } else {
            return set((state) => ({
                authError:
                    "Votre mot de passe ou numéro de téléphone n'est pas valide !",
            }));
        }
    },
    signupUser: async (
        phoneNumber,
        password,
        firstName,
        lastName,
        email,
        confirmedPassword,
        codeExetat
    ) => {
        let error = false;
        let firstChar = phoneNumber[0];
        firstChar = "+243";
        const phone = firstChar + phoneNumber.slice(1);
        const data = {
            phoneNumber: phone,
            password,
            confirmedPassword,
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email,
            username: firstName.trim() + " " + lastName.trim(),
            linkProfilImage: "",
        };

        const response = await API.post("/authentification/register", {
            data,
        }).catch((reason) => {
            error = true;
            console.log({ reason });
        });



        const responseData = await response.data;

        const registerCode = await API.post("/my-favorites", {
            data: {
                code: codeExetat,
                name: data.username,
                users_permissions_user: responseData.id
            }
        }).catch((reason) => {
            error = true;
            console.log({ reason });
        });



        console.log({ responseData })
        console.log({ id: responseData.id })
        if (response.data) {
            await SecureStore.setItemAsync("firstName", responseData.firstName);
            await SecureStore.setItemAsync(
                "phoneNumber",
                responseData.phoneNumber
            );
            await SecureStore.setItemAsync("lastName", responseData.lastName);
            await SecureStore.setItemAsync("email", responseData.email);
            await SecureStore.setItemAsync("id", `${responseData.id}`);
            await SecureStore.setItemAsync("codeExetat", codeExetat);
            return set((state) => {
                return {
                    firstName: responseData.firstName,
                    phoneNumber: responseData.phoneNumber,
                    lastName: responseData.lastName,
                    email: responseData.email,
                    id: responseData.id,
                    codeExetat
                };
            });
        }
    },
    confirmUser: async (code, phoneNumber) => {
        let error = false;

        await API.post("authentification/confirm", {
            data: {
                phoneNumber,
                code,
            },
        }).catch((reason) => {
            error = true;
            console.log({ code, phoneNumber, reason });
        });
        if (!error) {
            await SecureStore.setItemAsync("isAuth", "1");
            await SecureStore.setItemAsync("confirmed", "1");
            return set((state) => {
                return {
                    confirmed: true,
                    isAuth: true,
                };
            });
        }
    },
    logoutUser: () =>
        set(() => ({
            confirmed: false,
            isAuth: false,
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
        })),
}));

export default userStore;
