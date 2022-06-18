import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "#000",
};

export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    colorAdded(state, action) {
      state.color = action.payload;
    },
  },
});

export const selectColor = (state) => state.color;
export const { colorAdded } = colorSlice.actions;
export default colorSlice.reducer;
