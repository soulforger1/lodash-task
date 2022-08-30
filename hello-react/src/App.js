import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact, LogIn, Home, BlogDetail, Blogs, Header } from "./components";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Blog" element={<Blogs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Blog/:id" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
