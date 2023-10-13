import { create } from 'zustand';

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