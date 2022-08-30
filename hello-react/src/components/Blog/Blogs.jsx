import React from "react";
import { BlogPost } from "../index";
import MockData from "../../Mock/MOCK_DATA.json";

export const Blogs = () => {
  return (
    <div className="d-flex flex-row gap-5 row justify-content-center ">
      {MockData.map((el, index) => {
        return <BlogPost child={el} className="col-4" index={index} />;
      })}
    </div>
  );
};
