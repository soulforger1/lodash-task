import React from "react";
import { BlogPost, Header } from "../index";
import { MockData } from "../MOCK_DATA";

export const Blogs = () => {
  return (
    <div className="d-flex flex-row gap-5 row justify-content-center ">
      <Header />
      {MockData.map((el, index) => {
        return <BlogPost child={el} className="col-4" index={index} />;
      })}
    </div>
  );
};
