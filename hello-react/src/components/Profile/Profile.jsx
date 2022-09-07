import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export const Profile = () => {
  const [user, setUser] = useState({});
  let { id } = useParams();
  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get(`https://dummyapi.io/data/v1/user/${id}`, {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            // use your own app-id of dummy api
            "app-id": "63104c3120f6e665ecf628ba",
          },
        });
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    // called here
    getUserData();
  }, [id]);

  // destructing object
  const {
    dateOfBirth,
    email,
    firstName,
    gender,
    lastName,
    phone,
    picture,
    location,
  } = user;
  return (
    <div
      className="w-100 d-flex flex-column align-items-center gap-5 "
      style={{ paddingTop: 180 }}
    >
      <img
        src={picture || ""}
        alt={firstName || ""}
        width={200}
        style={{ borderRadius: "50%", objectFit: "contain" }}
      />
      <div className="fs-1 fw-bold text-start ">
        {firstName || ""} {lastName || ""}
      </div>
      <div className="d-flex flex-column align-items-center text-secondary">
        <div>{email || ""}</div>
        <div>
          {location?.city || ""}, {location?.country || ""}
        </div>
        {phone?.toString() || ""}
      </div>
      <div className="d-flex" style={{ gap: "30px" }}>
        <div className="d-flex flex-column align-items-center">
          <div>AGE</div>
          <div className="text-secondary">
            {new Date().getFullYear() - new Date(dateOfBirth).getFullYear() ||
              ""}
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div>GENDER</div>
          <div className="text-secondary">{gender?.toUpperCase()}</div>
        </div>
      </div>
    </div>
  );
};
