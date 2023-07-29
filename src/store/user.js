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
      await SecureStore.setItemAsync("firstName", responseData.user.firstName);
      await SecureStore.setItemAsync(
        "phoneNumber",
        responseData.user.phoneNumber
      );
      await SecureStore.setItemAsync("lastName", responseData.user.lastName);
      await SecureStore.setItemAsync("email", responseData.user.email);
      await SecureStore.setItemAsync("isAuth", "1");
      await SecureStore.setItemAsync("confirmed", "1");

      return set((state) => ({
        firstName: responseData.firstName,
        phoneNumber: responseData.phoneNumber,
        lastName: responseData.lastName,
        email: responseData.email,
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

    if (response.data) {
      await SecureStore.setItemAsync("firstName", responseData.user.firstName);
      await SecureStore.setItemAsync(
        "phoneNumber",
        responseData.user.phoneNumber
      );
      await SecureStore.setItemAsync("lastName", responseData.user.lastName);
      await SecureStore.setItemAsync("email", responseData.user.email);
      return set((state) => {
        return {
          firstName: response.data.firstName,
          phoneNumber: response.data.phoneNumber,
          lastName: response.data.lastName,
          email: response.data.email,
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
      console.log({ reason });
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
