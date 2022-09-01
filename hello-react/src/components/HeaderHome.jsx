import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icon/logoWithColor.svg";
export const HeaderHome = () => {
  return (
    <div className="d-flex justify-content-between align-items-center pt-3 px-5" style={{backgroundColor: 'transparent'}}>
      <Link to="/home">
        <img src={logo} alt="" />
      </Link>
      <div className="d-flex gap-4  align-items-center">
        <Link to="/home" className="text-white">
          Home
        </Link>
        <Link to="/blog" className="text-white">
          Blog
        </Link>
        <Link to="/contact" className="text-white">
          Contact
        </Link>
        <Link to="/login" className="text-white">
          Log In
        </Link>
        <div className="border rounded border-2">
          <div
            type="button"
            className="btn"
            style={{ backgroundColor: "transparent" }}
          >
            <div className="text-white-50 opacity-75 ">Get Acces</div>
          </div>
        </div>
      </div>
    </div>
  );
};
