import { create } from "zustand";
import API from "../services/axios";
import * as SecureStore from "expo-secure-store";

const userStore = create((set) => ({
    isAuth: false,
    profil: {
        age_range: "",
        username: "",
        pseudo: "",
        phone_number: "",
        birth_date: "",
        gender: "",
        picture: "",
        password: "",
        confirmPassword: "",
        confirmed: true,    
        blocked: false
    },
    userChange: (user) => {
        return set((state) => ({ ...state, ...user }))
    },
}));

export default userStore;
