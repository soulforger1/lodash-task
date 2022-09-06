/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useNavigate } from "react-router-dom";

export const BlogPost = ({ child, index }) => {
  let navigate = useNavigate();
  return (
    <div
      className="flex gap-3 mt-3   "
      style={{ width: "408px", height: "440px" }}
    >
      <div
        className="card w-100 h-100 bg-light"
        style={{ borderRadius: "30px", cursor: "pointer" }}
        onClick={() => navigate(`/blog/${index}`)}
      >
        <img
          className="card-img-top"
          src={child.img}
          alt="Card image cap"
          style={{ borderRadius: "30px" }}
          height={"200px"}
        />
        <div className="card-body">
          <h5 className="card-title">{child.title}</h5>
          <p className="card-text">{child.description}</p>
        </div>
        <div className="card-body d-flex align-items-center gap-3">
          <img src={child.bottom[0]} alt="" width={40} />
          <div className="text-muted">{child.bottom[1]}</div>
          <div className="text-muted">{child.bottom[2]}</div>
        </div>
      </div>
    </div>
  );
};
