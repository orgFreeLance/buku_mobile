import { create } from "zustand";
import API from "../services/axios";
import * as SecureStore from "expo-secure-store";

const billingStore = create((set) => ({
  pieces: 0,
  addPieces: async (billingId, id, phoneNumber, pieces) => {
    let error = false;
    const data = {
      userId: id,
      billingId,
      transactionNumber: phoneNumber,
    }
    const response = await API.post("/billing/buy-ticket", {
      data,
    }).catch((reason) => {
      error = true;
      console.log({ reason });
    });

    console.log({ data })
    if (!error) {

      await SecureStore.setItemAsync("pieces", `${pieces + response.data.newAmount}`);
      return set((state) => {

        return ({ pieces: state.pieces + response.data.newAmount })
      })
    }
  },
  getBills: async () => {
    const pieces = await SecureStore.getItemAsync("pieces");
    console.log({ pieces })
    return set((state) => {

      return ({ pieces: parseInt(pieces, 10) || 0 })
    })
  },
  removePieces: (piecesNumber) =>
    set((state) => ({ pieces: state.pieces - piecesNumber })),
}));

export default billingStore;