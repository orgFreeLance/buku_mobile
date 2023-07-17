import { create } from 'zustand';

const userStore = create((set) => ({
    isAuth: false,
    firstName: "John",
    lastName: "Doe",
    phone: "0823311664",
    email: "",
    password: "123456789",
    logUser: (phone, password) => (set((state) => (state.phone == phone && state.password == password ? ({ isAuth: true }) : ({ isAuth: false })))),
    signupUser: (phone, password, firstName, lastName, email) => (set((state) => {
        console.log({ firstName: firstName, phone: phone, lastName: lastName, email: email, });
        return { firstName: firstName, phone: phone, lastName: lastName, email: email, isAuth: true };
    }))
}));

export default userStore;