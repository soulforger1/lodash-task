import React, { useEffect, useState } from "react";
import { ReadComment } from "./index";
import Profile from "../../assets/icon/Profile.svg";
import { instance } from "../../utils/axios/custom";
export const WriteComment = ({ id }) => {
  const [allComment, setAllComment] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await instance.get(`/post/${id}/comment`);
        setAllComment(res?.data?.data || []);
      } catch (error) {
        console.log(error);
      }
    };
    // called here
    getUserData();
  }, [id]);
  const submitComment = async (event) => {
    // block auto reload page
    event.preventDefault();
    await postComment(id, comment);
    setComment("");
  };
  return (
    <div>
      {allComment?.map((comment, index) => {
        return <ReadComment key={index} comment={comment} />;
      })}
      <div className="text-muted h4">Join the conversation</div>
      <form onSubmit={submitComment}>
        <div className="d-flex align-items-center gap-3 mt-4">
          <img
            src={Profile}
            width="56"
            className="rounded-circle"
            alt="Profile"
          />
          <textarea
            required
            type="text"
            className="form-control"
            style={{ width: "800px", height: "100px" }}
            placeholder="Enter Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit">send</button>
        </div>
      </form>
    </div>
  );
};

const postComment = async (id, comment) => {
  try {
    await instance.post(`comment/create`, {
      post: id,
      //this is static id because we don't have auth user
      owner: "60d0fe4f5311236168a109df",
      publishDate: new Date(),
      message: comment,
    });
  } catch (error) {
    console.log(error);
  }
};
