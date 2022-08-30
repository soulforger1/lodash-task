import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact, LogIn, Home, BlogDetail, Blogs } from "./components";
import Layout from "./layout/Layout";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
