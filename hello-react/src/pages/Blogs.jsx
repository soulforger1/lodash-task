import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { BlogPost } from "../components";
import { instance } from "../utils/axios/custom";

export const Blogs = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await instance.get("post");
        setPosts(res?.data?.data || []);
      } catch (error) {
        console.log(error.message);
      }
    };
    // called here
    fetchPosts();
  }, []);
  return (
    <div style={{ paddingTop: "90px" }}>
      <Container>
        <div className="mt-5 ">
          <h1 className="fw-bold">Blog posts</h1>
          <div style={{ color: "#6D7D8B" }} className="mt-2 mb-4">
            Our latest updates and blogs about managing your team
          </div>
          <div className="d-flex flex-row gap-5 row justify-content-center ">
            {posts?.map((el, index) => {
              return (
                <BlogPost
                  key={index}
                  child={el}
                  className="col-4"
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};
