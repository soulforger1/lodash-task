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
        class="card w-100 h-100 "
        style={{ borderRadius: "30px", cursor: "pointer" }}
        onClick={() => navigate(`/Blog/${index}`)}
      >
        <img
          class="card-img-top"
          src={child.img}
          alt="Card image cap"
          style={{ borderRadius: "30px" }}
          height={"200px"}
        />
        <div class="card-body">
          <h5 class="card-title">{child.title}</h5>
          <p class="card-text">{child.description}</p>
        </div>
        <div class="card-body d-flex align-items-center gap-3">
          <img src={child.bottom[0]} alt="" width={40} />
          <div className="text-muted">{child.bottom[1]}</div>
          <div className="text-muted">{child.bottom[2]}</div>
        </div>
      </div>
    </div>
  );
};
