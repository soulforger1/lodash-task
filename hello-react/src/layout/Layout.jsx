import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import { ColorModeContext } from "../theme";

const Layout = () => {
  const { checked } = useContext(ColorModeContext);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(offset);
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100%",
          backgroundColor:
            offset !== 0 ? (checked ? "#fff" : "#212529") : "transparent",
          zIndex: 999,
        }}
      >
        <Header />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
