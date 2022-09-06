import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ColorModeContext } from "../theme";
export const Header = () => {
  const { handleChange } = useContext(ColorModeContext);
  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center pt-3 pb-3">
        <p
          style={{
            textDecoration: "none",
            fontFamily: "inherit",
            fontWeight: 800,
            fontSize: "30px",
            lineHeight: "38px",
          }}
        >
          team.
        </p>
        <div className="d-flex gap-4  align-items-center">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={handleChange}
            />
          </div>
          <Link to="/home" className="text-muted">
            Home
          </Link>
          <Link to="/blog" className="text-muted">
            Blog
          </Link>
          <Link to="/contact" className="text-muted">
            Contact
          </Link>
          <Link to="/login" className="text-muted">
            Log In
          </Link>
          <div className="border border-primary rounded border-2">
            <div
              type="button"
              className="btn "
              style={{ background: "rgba(77, 160, 253, 0.1)" }}
            >
              <div className="text-primary opacity-75 ">Get Acces</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
