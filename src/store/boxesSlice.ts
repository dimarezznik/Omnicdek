import { createSlice } from "@reduxjs/toolkit";
import XXS from '../assets/images/xxs.svg'
import XS from '../assets/images/xs.svg'
import S from '../assets/images/s.svg'
import M from '../assets/images/m.svg'
import L from '../assets/images/l.svg'
import XL from '../assets/images/xl.svg'
import XXL from '../assets/images/xxl.svg'
import XXXL from '../assets/images/xxxl.svg'

const boxesSlice = createSlice({
  name: "boxes",
  initialState: {
    boxesSmall: [],
    boxesMid: [],
    boxesLarge: [],
    images: [XXS, M, XXL, XS, L, XXXL, S, XXS],
    infoDevice: null,
  },
  reducers: {
    getInfoDevice(state, action) {
      state.infoDevice = action.payload;
    },

    getPackages(state: any, action) {
      state.boxes = action.payload.data.cell_types
      state.boxes.forEach((box: { image: any; }, index: string | number) => {
        box.image = state.images[index]
      })
      console.log(state.boxes);
    }
  },
});

export const { getInfoDevice, getPackages } = boxesSlice.actions;

export default boxesSlice.reducer;
