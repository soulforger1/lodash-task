import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles/index.scss";
import { instance } from "./utils/axios/custom";

instance.interceptors.request.use(
  (req) => {
    //loader
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const status = error.response.status || 500;
    switch (status) {
      case 400:
        console.log("Хүсэлт буруу байна.");
        break;
      case 404:
        console.log("Хуудас олдсонгүй.");
        break;
      default:
        console.log("Алдаа гарлаа.");
        break;
    }
  }
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
