import React, { useState } from "react";
import { ReadComment } from "./index";
import Profile from "../../assets/icon/Profile.svg";

export const WriteComment = () => {
  const [allComment, setAllCommnet] = useState([]);
  const [comment, setComment] = useState("");

  const KeyCode = (event) => {
    if (event.code === "Enter" && comment !== "") {
      allComment.push(comment);
      setAllCommnet([...allComment]);
      setComment("");
    }
  };


  return (
    <div className="">
      {allComment.map((comment, index) => {
        return (
          <ReadComment
            comments={comment}
            key={index}
            index={index}
            allComment={allComment}
            setAllCommnet={setAllCommnet}
          />
        );
      })}
      <div className="text-muted h4">Join the conversation</div>
      <div className="d-flex align-items-center gap-3 mt-4">
        <img src={Profile} width="56" class="rounded-circle" alt="Profile" />
        <textarea
          type="text"
          class="form-control"
          style={{ width: "800px" , height:"100px" }}
          placeholder="Enter Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={(event) => KeyCode(event)}
        />
      </div>
    </div>
  );
};
