import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../api/axios";
import {getInfoDevice} from "./boxesSlice";

const device_uid = "34670a76-6022-4df5-ac1d-68f88589c904";

export const fetchInfoDevice = createAsyncThunk(
    "boxes/fetchInfoDevice",
    async function (_, { dispatch }) {
        try {
            const { data } = await axios(`api/2.0.0/public/device/${device_uid}/`);
            dispatch(getInfoDevice(data))
        } catch (e) {
            console.log(e);
        }
    }
);
