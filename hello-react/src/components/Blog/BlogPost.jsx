/* eslint-disable jsx-a11y/img-redundant-alt */
import { useNavigate } from "react-router-dom";

export const BlogPost = ({ child }) => {
  let navigate = useNavigate();
  // destructing object
  const { id, tags, image, owner, publishDate, text } = child;
  return (
    <div
      className="flex gap-3 mt-3   "
      style={{ width: "408px", height: "440px" }}
    >
      <div
        className="card w-100 h-100 bg-light"
        style={{ borderRadius: "30px", cursor: "pointer" }}
      >
        <img
          onClick={() => navigate(`/blog/${id}`)}
          className="card-img-top"
          src={image || ""}
          alt="Card image cap"
          style={{ borderRadius: "30px", objectFit: "cover" }}
          height={"200px"}
        />
        <div className="card-body">
          <h5 className="card-title">{tags + ""}</h5>
          <p className="card-text">{text || ""}</p>
        </div>
        <div className="card-body d-flex align-items-center gap-3">
          <img
            src={owner.picture}
            alt=""
            width={40}
            style={{ borderRadius: "50%" }}
            onClick={() => navigate(`/user/${owner.id}`)}
          />
          <div className="text-muted">
            {owner?.firstName + " " + owner?.lastName} |
          </div>
          <div className="text-muted">
            {new Date(publishDate).toDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};
