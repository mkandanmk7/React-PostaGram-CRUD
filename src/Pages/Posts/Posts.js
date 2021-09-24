import "./Posts.css";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Posts() {
  const url = "https://jsonplaceholder.typicode.com";

  const [posts, setPosts] = useState([]);

  //getPost
  const getPosts = async () => {
    let { data } = await axios.get(`${url}/posts`);
    console.log(data);
    setPosts(data);
  };

  // delete post;

  const deletePost = async (id) => {
    console.log(id, "deleted");
  };

  // COMPONENT DID MOUNT()
  useEffect(() => {
    console.log("Mounted");
    getPosts();
  }, []);

  return (
    <div className="mt">
      <h2 className="bg-primary text-danger ">Welcome to Posts </h2>
      <div className="container">
        {posts.map((post) => {
          return (
            <div
              key={post.id}
              className="body  d-flex flex-column align-items-center justify-content-center"
            >
              <h2 className="postid my-2 ">
                <b>Post :</b>
                {post.id}
              </h2>
              <p>
                <b>{post.title}</b>
              </p>
              <p className="text-muted">{post.body}</p>
              <div>
                <button className="btn btn-success mx-2" onClick={() => {}}>
                  Update
                </button>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => deletePost(post.id)}
                >
                  Delete
                </button>
                <button className="btn btn-info m-2">Comments</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
