import React, { useContext } from "react";
import { ToastContext } from "../../provider";
import { instance } from "../../utils/axios/custom";
export const ReadComment = ({ comment }) => {
  const { id, message, owner, publishDate } = comment;
  //http://localhost:3000/blog/60d21af267d0d8992e610b8d this "id" had comments
  const { handleOpenToast } = useContext(ToastContext);
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between px-2 gap-3 my-2 ml-4 border-bottom w-100 py-3">
        <div className="d-flex align-items-center gap-3">
          <img
            src={owner?.picture}
            width="46"
            className="rounded-circle"
            alt={owner.firstName || ""}
          />
          <div className="d-flex flex-column">
            <div className="text-secondary" style={{ fontSize: 12 }}>
              {owner?.firstName} {owner?.lastName} |{" "}
              {new Date(publishDate).toDateString()}
            </div>
            {message}
          </div>
        </div>
        {owner.id === "60d0fe4f5311236168a109df" && (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Linearicons_trash.svg/20px-Linearicons_trash.svg.png?20190310162021"
            alt=""
            width="20px"
            style={{ cursor: "pointer" }}
            onClick={async () => {
              await deleteComment(id);
              window.location.reload();
              handleOpenToast("Амжилттай устгалаа!");
            }}
          />
        )}
      </div>
    </div>
  );
};
const deleteComment = async (id) => {
  try {
    await instance.delete(`/comment/${id}`);
  } catch (error) {
    console.log(error);
  }
};
