import { create } from "zustand";

const userStore = create((set) => ({
    isAuth: false,
    username: "",
    pseudo: "",
    phoneNumber: "",
    email: "",
    gender: "M",
    ageRange: "0 - 10",
    picture: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHcAswMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgYDB//EAC4QAQACAQIEBAQGAwAAAAAAAAABAgMEEQUSITFBUWFxEzJSsSJCgaHR4SM0kf/EABgBAQADAQAAAAAAAAAAAAAAAAABAgME/8QAHBEBAQACAwEBAAAAAAAAAAAAAAECEQMxUSES/9oADAMBAAIRAxEAPwD6GA6WYAAAAAAHisNHwu+aIvmmaUntEd5RbIK96UwZsnyYr29qy6HDotPh25Mcbx4z1lI2Z3k8W/LmMukz4cfxMmOa19Zh4r3imivqdr4rdax8k9p/tR2rNbTW0TEx3ifBfG7RZpgBZAAAAAAAAAAAAAAAAC04Npa5JnPeImKztWJ8/NdIPB420NfefunOfLteACEiv4noa5sc5aRtlrHh+aFgxKZdDkvYJ7joZgAAAAAAAAAAAAAAAOh4R/oU95+6ai8OxXw6SlMkbWjfeN/VKc97aQAQDEssSDkp7z7jbLjvivNMlZraO8S1dEZgCQAAAAAAAAAAAAY7MgOrxW5sdbecRLdA4PnnLpeW3fHPL+ie5r20AAGJZeWqy/AwXy9+WN9vMHP8Stza7N6TEftCMze83va9uszO8sOifIzAEgAAAAAAAAAAAAACfwbPGLUTS3y3jb9V+5HtO8Orw83wac0725Y3n1Y5zVXjcBRIq+N54rhrhiet53n2haOb4nMzrs2/nH2Wwm6iooDdQAAAAAAAAAAAAAABmlLZLctKzafKI3BI0OktqskxForFeszMOkjpEIPCdLbBhtOSu17z1jyhPYZXdXkAFUih4xp7Y885t4muSf8AnRfInEtNOo001rH4461TjdVFc4NsuK+K22Slqz6w1dCgAAAAAAAAAADbFivmvFMdZtafCAavXBpsuon/ABUm3nPhC10nCaU2tqJ55+mO0fys61isRFYiIjtEM7yeLSKrT8HrG06i/NP016QssWHHiry4qRWPSHoM7bU6AEJAAAAa3x0vWa3rFonwmFdqOE4r9cMzjny7wsxMtg5nUaLPp95vTev1R1hHdchanhuDPvMV5Lz+av8AC8z9Vsc8PfVaTLpb8uSN4ntaO0vBpLKqAJAAAABfcJw0x6WuTb8V+sz6Az5OkxP3g3gGS7MAAAAAAAAAAxubgDy1WKmow3x28Y6ekuXtG0zE946MjTjVrADVUAB//9k=",
    password: "",
    confirmPassword: "",
    confirmed: true,
    blocked: false,
    userChange: (user) => {
        return set((state) => ({ ...state, ...user }))
    },
}));

export default userStore;
