import AxiosOrigin from "axios";

const axios = AxiosOrigin.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default axios;
