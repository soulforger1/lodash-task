import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { WriteComment } from "..";
export const BlogDetail = () => {
  const [postDetail, setPostDetail] = useState({
    image: "",
    owner: {},
    publishDate: "",
    tags: "",
    text: "",
  });
  const navigate = useNavigate();
  let { id } = useParams();
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`https://dummyapi.io/data/v1/post/${id}`, {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            // use your own app-id of dummy api
            "app-id": "63104c3120f6e665ecf628ba",
          },
        });
        const data = await res.json();
        setPostDetail(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    // called here
    fetchPosts();
  }, [id]);

  // destructing object
  const { image, owner, publishDate, tags, text } = postDetail;
  return (
    <div
      className="w-100 d-flex flex-column align-items-center gap-5 "
      style={{ paddingTop: 90 }}
    >
      <div className="fs-1 fw-bold text-start ">{tags + ""}</div>
      <div className="card-body d-flex align-items-center gap-3">
        <img
          src={owner.picture}
          alt={owner.firstName}
          width={56}
          style={{ borderRadius: "50%" }}
          onClick={() => navigate(`/user/${owner.id}`)}
        />
        <div className="text-muted">
          {owner.firstName + " " + owner.lastName}
        </div>
        <div className="text-muted">{new Date(publishDate).toDateString()}</div>
      </div>
      <img
        src={image}
        alt=""
        style={{
          maxWidth: 900,
          width: "100%",
          objectFit: "cover",
          height: 450,
        }}
      />
      <div className="w-50 ">{text}</div>
      <div className="d-flex gap-3">
        <img
          src={owner.picture}
          alt={owner.firstName}
          width={56}
          style={{ borderRadius: "50%" }}
        />
        <div className="d-flex flex-column lh-2">
          <div className="fs-6 fw-lighter">written by</div>
          <div>
            {owner.firstName} {owner.lastName}
          </div>
        </div>
      </div>
      <WriteComment id={id}/>
    </div>
  );
};
