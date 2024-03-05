import { create } from 'zustand';

const appStore = create((set) => ({
    currentPage: {
        name: "",
        favory: false
    },
    gender: "M",
    ageRange: "0 - 10",
    currentBook: {
        favory: false
    },
    currentCategory: {},
    categories: [],
    currentCategories: [],
    tomes: [],
    chapters: [],
    coins: [],
    currencies: [],
    currencyOfCoins: {
        id: "Tout"
    },
    bookOfChoice: {
        id: "Achetés", attributes: { name: "Achetés", symbol: "Achetés" }
    },
    bookChoices: [
        { id: "Achetés", attributes: { name: "Achetés", symbol: "Achetés" } },
        { id: "Favoris", attributes: { name: "Favoris", symbol: "Favoris" } }],
    tomesFavorites: [],
    tomesBuyed: [],
    tomesByGenre: [],
    tomesPreferences: [],
    tomesPopulars: [],
    ageRanges: [
        { name: "0 - 10", select: true },
        { name: "11 - 13", select: false },
        { name: "14 - 17", select: false },
        { name: "18 - 24", select: false },
        { name: "25 - 29", select: false },
        { name: "30 - 34", select: false },
        { name: "35 - 39", select: false },
        { name: "40 - 44", select: false },
        { name: "45 - 49", select: false },
        { name: ">= 50", select: false }
    ],
    appChange: (app) => {
        return set((state) => ({ ...state, ...app }))
    },
}));

export default appStore;