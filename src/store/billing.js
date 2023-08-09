import { create } from "zustand";
import API from "../services/axios";

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
    if (!error) {

      await SecureStore.setItemAsync("pieces", `${pieces + response.data.newAmount}`);
      return set((state) => {

        return ({ pieces: state.pieces + response.data.newAmount })
      })
    }
  },
  removePieces: (piecesNumber) =>
    set((state) => ({ pieces: state.pieces - piecesNumber })),
}));

export default billingStore;