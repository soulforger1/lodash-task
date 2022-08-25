import React from "react";
import { BrowserRouter, Routes, Route   } from "react-router-dom";
import { Contact, Header, LogIn, Products ,BlogDetail, Blogs} from "./components";

const App = () => {

 
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Header />} />
          <Route path="/Blog" element={<Blogs />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Blog/:id" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
