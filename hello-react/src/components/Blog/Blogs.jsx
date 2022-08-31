import React from "react";
import { BlogPost } from "../index";
import MockData from "../../Mock/MOCK_DATA.json";

export const Blogs = () => {
  return (
    <div className="mt-5 ">
      <h1 className="fw-bold">Blog posts</h1>
      <div style={{ color: "#6D7D8B" }} className="mt-2 mb-4">
        Our latest updates and blogs about managing your team
      </div>
      <div className="d-flex flex-row gap-5 row justify-content-center ">
        {MockData.map((el, index) => {
          return <BlogPost child={el} className="col-4" index={index} />;
        })}
      </div>
    </div>
  );
};
