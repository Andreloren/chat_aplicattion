import { Axios } from "axios";

const requestApi = new Axios({
  baseURL: "http://localhost:5151",
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
});

export { requestApi };
