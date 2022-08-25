import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icon/team..svg";

export const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center pt-3">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div className="d-flex gap-4  align-items-center">
        <Link to="/Products" className="text-muted">
          Products
        </Link>
        <Link to="/Blog" className="text-muted">
          Blog
        </Link>
        <Link to="/Contact" className="text-muted">
          Contact
        </Link>
        <Link to="/LogIn" className="text-muted">
          Log In
        </Link>
        <div className="border border-primary rounded border-2">
          <div
            type="button"
            class="btn "
            style={{ background: "rgba(77, 160, 253, 0.1)" }}
          >
            <div className="text-primary opacity-75 ">Get Acces</div>
          </div>
        </div>
      </div>
    </div>
  );
};
