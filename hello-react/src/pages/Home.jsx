import React from "react";
import { HomebgHeader, Home1, Home2, Home3, ScrollCards } from "../components";

export const Home = () => {
  return (
    <div className="d-flex flex-column gap-5">
      <HomebgHeader />
      <Home1 />
      <Home2 />
      <Home3 />
      <div className="d-flex justify-content-center">
        <h1 className="fw-bold">What people say about us</h1>
      </div>
      <ScrollCards />
    </div>
  );
};
