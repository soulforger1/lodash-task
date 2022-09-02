import React from "react";
import { BlogPost } from "../index";
// import MockData from "../../Mock/MOCK_DATA.json";
import { useEffect } from "react";
import { useState } from "react";

export const Blogs = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(" https://dummyapi.io/data/v1/post", {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            // use your own app-id of dummy api
            "app-id": "63104c3120f6e665ecf628ba",
          },
        });
        const data = await res.json();
        setPosts(data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    // called here
    fetchPosts();
  }, []);

  return (
    <div className="mt-5 ">
      <h1 className="fw-bold">Blog posts</h1>
      <div style={{ color: "#6D7D8B" }} className="mt-2 mb-4">
        Our latest updates and blogs about managing your team
      </div>
      <div className="d-flex flex-row gap-5 row justify-content-center ">
        {posts?.map((el, index) => (
          <BlogPost key={index} child={el} className="col-4" index={index} />
        ))}
      </div>
    </div>
  );
};
