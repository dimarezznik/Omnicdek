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

    getPackages(state, action) {
      state.boxes = action.payload.data.cell_types
    }
  },
});

export const { getInfoDevice, getPackages } = boxesSlice.actions;

export default boxesSlice.reducer;
