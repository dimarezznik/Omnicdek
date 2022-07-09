import { createSlice } from "@reduxjs/toolkit";




const boxesSlice = createSlice({
  name: "boxes",
  initialState: {
    boxes: [],
    infoDevice: null,
  },
  reducers: {
    getInfoDevice(state, action) {
      state.infoDevice = action.payload;
    },
  },
});

export const { getInfoDevice } = boxesSlice.actions;

export default boxesSlice.reducer;
