import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import Container from "react-bootstrap/Container";

const Layout = () => {
  return (
    <div>
      <Container>
        <Header />
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
