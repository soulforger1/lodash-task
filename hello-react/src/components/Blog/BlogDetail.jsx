import React from "react";
import { useParams } from "react-router-dom";
import { WriteComment } from "../index";
import MockData from "../../Mock/MOCK_DATA.json";
export const BlogDetail = () => {
  let { id } = useParams();
  const data = MockData[id];
  return (
    <div>
      <div className="w-100 d-flex flex-column align-items-center my-5  gap-5 ">
        <div className="fs-1 fw-bold text-start ">{data.title}</div>
        <div className="card-body d-flex align-items-center gap-3">
          <img src={data.bottom[0]} alt="" width={40} />
          <div className="text-muted">{data.bottom[1]}</div>
          <div className="text-muted">{data.bottom[2]}</div>
        </div>
        <img src={data.img} alt="" width={900} height={450} />
        <div className="w-50 ">{data.detail}</div>
        <div className="d-flex gap-3">
          <img src={data.bottom[0]} alt="" />
          <div className="d-flex flex-column lh-2">
            <div className="fs-6 fw-lighter">written by</div>
            <div>{data.bottom[1]}</div>
          </div>
        </div>
        <WriteComment />
      </div>
    </div>
  );
};
