import { create } from "zustand";

const billingStore = create((set) => ({
  pieces: 0,
  addPieces: (piecesNumber) =>
    set((state) => ({ pieces: piecesNumber + state.pieces })),
    removePieces: (piecesNumber) =>
    set((state) => ({ pieces: state.pieces - piecesNumber })),
}));
