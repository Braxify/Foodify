import { IModal } from "interfaces/IModal";
import { createSlice } from "@reduxjs/toolkit";

interface UIModalState {
  modal: IModal;
}

const initialState: UIModalState = {
  modal: {
    isOpened: false,
  },
};

export const UIModalSlice = createSlice({
  name: "uiModalSlice",
  initialState,
  reducers: {
    openModal: (state) => {
      state.modal.isOpened = true;
    },
    closeModal: (state) => {
        state.modal.isOpened = false;
    },
  },
});

export const { openModal, closeModal } = UIModalSlice.actions;

export default UIModalSlice.reducer;
