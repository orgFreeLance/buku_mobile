import {create} from 'zustand';

const userStore = create((set) => ({
    isAuth: false,
}));

export default userStore;