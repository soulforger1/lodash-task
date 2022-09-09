import { createContext, useState } from "react";
import { Toast } from "react-bootstrap";
import { instance } from "../utils/axios/custom";

export const ToastContext = createContext();
export const ToastProvider = ({ children }) => {
  const [show, setShow] = useState("");

  const handleOpenToast = (message = "") => {
    setShow(message);
  };
  const handleCloseToast = () => {
    setShow("");
  };

  instance.interceptors.request.use(
    (req) => {
      //loader
      document.body.classList.add("loading-indicator");
      return req;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      document.body.classList.remove("loading-indicator");
      handleOpenToast("Амжилттай");
      return response;
    },
    (error) => {
      const status = error?.response?.status || 500;
      switch (status) {
        case 400:
          //test URL - http://localhost:3000/blog/60d21b4667d0d8992e610c8
          handleOpenToast("Хүсэлт буруу байна.");
          break;
        case 404:
          handleOpenToast("Хуудас олдсонгүй.");
          break;
        default:
          handleOpenToast("Алдаа гарлаа.");
          break;
      }
      document.body.classList.remove("loading-indicator");
      return Promise.reject(error);
    }
  );

  return (
    <ToastContext.Provider value={{ handleOpenToast }}>
      {children}
      <Toast
        onClose={handleCloseToast}
        show={show !== ""}
        delay={6000}
        autohide
        style={{ left: 10, bottom: 10, position: "fixed", zIndex: 3 }}
      >
        <Toast.Body className="d-flex" style={{ borderRadius: 5 }}>
          <div className="w-100">{show}</div>
          <button
            style={{ background: "none", border: "none" }}
            onClick={handleCloseToast}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Toast.Body>
      </Toast>
    </ToastContext.Provider>
  );
};
