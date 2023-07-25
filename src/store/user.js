import { create } from "zustand";
import API from "../services/axios";

const userStore = create((set) => ({
  isAuth: false,
  confirmed: false,
  firstName: "John",
  lastName: "Doe",
  phoneNumber: "0823311664",
  email: "",
  logUser: (phoneNumber, password) =>
    set((state) =>
      state.phoneNumber == phoneNumber && state.password == password
        ? { confirmed: true }
        : { confirmed: false }
    ),
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
      firstName,
      lastName,
      username: firstName + lastName + firstChar + phoneNumber.slice(3,3),
      linkProfilImage: "",
    };

    console.log({
      data,
    });
    const response = await API.post("/authentification/register", {
      data,
    }).catch((reason) => {
      error = true;
      console.log({ reason });
    });

    if (response.data) {
      return set((state) => {
        return {
          firstName: response.data.firstName,
          phoneNumber: response.data.phoneNumber,
          lastName: response.data.lastName,
          email: response.data.email,
          isAuth: true,
        };
      });
    }
  },
}));

export default userStore;
