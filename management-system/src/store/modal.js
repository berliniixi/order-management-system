import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
  toggle: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    toggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
