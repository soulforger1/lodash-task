import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact, LogIn, Home, Blogs } from "./pages";
import Layout from "./layout/Layout";
import { BlogDetail, Profile } from "./components";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/user/:id" element={<Profile />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
