import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const boxesSlice = createSlice({
  name: "boxes",
  initialState: {
    boxes: [],
  },
  reducers: {},
});

export default boxesSlice.reducer;
