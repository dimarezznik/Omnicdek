import { createSlice } from "@reduxjs/toolkit";
import XXS from "../assets/images/xxs.svg";
import XS from "../assets/images/xs.svg";
import S from "../assets/images/s.svg";
import M from "../assets/images/m.svg";
import L from "../assets/images/l.svg";
import XL from "../assets/images/xl.svg";
import XXL from "../assets/images/xxl.svg";
import XXXL from "../assets/images/xxxl.svg";

const boxesSlice = createSlice({
  name: "boxes",
  initialState: {
    boxesSmallMid: [],
    boxesLarge: [],
    images: [
      { image: XXS, size: "XXS", box: "20х11 см" },
      { image: XS, size: "XS", box: "20x16 см" },
      { image: S, size: "S", box: "38x11 см" },
      { image: M, size: "M", box: "20x21 см" },
      { image: L, size: "L", box: "38x16 см" },
      { image: XL, size: "XL", box: "38x21 см" },
      { image: XXL, size: "XXL", box: "64x21 см" },
      { image: XXXL, size: "XXXL", box: "64x36 см" },
    ],
    infoDevice: null,
  },
  reducers: {
    getInfoDevice(state, action) {
      state.infoDevice = action.payload;
    },

    getPackages(state: any, action) {
      const boxes = action.payload.data.cell_types;
      boxes.forEach((box: { image: any }, index: string | number) => {
        box.image = state.images[index];
      });
      state.boxesSmallMid = boxes.filter(
        (box: any) => box.type.includes("205") || box.type.includes("385")
      );
      state.boxesLarge = boxes.filter((box: any) => box.type.includes("646"));
      console.log();
    },
  },
});

export const { getInfoDevice, getPackages } = boxesSlice.actions;

export default boxesSlice.reducer;
