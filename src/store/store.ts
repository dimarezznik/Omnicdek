import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import boxesSlice from "./boxesSlice";

export const store = configureStore({
  reducer: {
    boxes: boxesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
