import { create } from 'zustand';

const userStore = create((set) => ({
    isAuth: false,
    userChange: (user) => {
        return set((state) => ({ ...state, ...user }))
    },
}));

export default userStore;