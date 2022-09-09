import axios from "axios";

export const instance = axios.create({
  baseURL: `https://dummyapi.io/data/v1/`,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    // use your own app-id of dummy api
    "app-id": "63104c3120f6e665ecf628ba",
  },
});