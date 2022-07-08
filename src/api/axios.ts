import AxiosOrigin from "axios";

const axios = AxiosOrigin.create({
  baseURL: "https://dev.hub.omnic.solutions/",
});

export default axios;
