import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

const device_uid = "34670a76-6022-4df5-ac1d-68f88589c904";

export const fetchBoxes = createAsyncThunk(
  "boxes/fetchBoxes",
  async function (_, { dispatch }) {
    try {
      const { data } = await axios(`api/2.0.0/public/device/${device_uid}/`);
      await dispatch(getInfoDevice(data));
    } catch (e) {
      console.log(e);
    }
  }
);

const boxesSlice = createSlice({
  name: "boxes",
  initialState: {
    boxes: [],
    infoDevice: {},
  },
  reducers: {
    getInfoDevice(state, action) {
      state.infoDevice = action.payload;
    },
  },
  extraReducers: {},
});

export const { getInfoDevice } = boxesSlice.actions;

export default boxesSlice.reducer;
