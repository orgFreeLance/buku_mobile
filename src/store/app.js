import { create } from 'zustand';

const appStore = create((set) => ({
    currentPage: {
        name: "",
    },
    currentBook: {},
    currentGenre: {},
    appChange: (app) => {
        return set((state) => ({ ...state, ...app }))
    },
}));

export default appStore;