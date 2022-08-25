import React from "react";
import Profile from "/Users/nasanbatg/Desktop/disk/curriculum/level2-curriculum-react/hello-react/src/assets/icon/Profile.svg";
export const ReadComment = ({ comments, index, allComment, setAllCommnet }) => {
  console.log(index);
  const Delete = () => {
    const deleteComment = allComment;
    allComment = deleteComment.filter((_el, ind) => ind !== index);
    setAllCommnet([...allComment]);
  };
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between px-2 gap-3 my-2 ml-4   border-bottom w-100 py-3">
        <div className="d-flex align-items-center gap-3">
          <img src={Profile} width="46" class="rounded-circle" alt="Profile" />
          <div>{comments}</div>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Linearicons_trash.svg/20px-Linearicons_trash.svg.png?20190310162021"
          alt=""
          width="20px"
          style={{ cursor: "pointer" }}
          onClick={() => Delete()}
        />
      </div>
    </div>
  );
};
