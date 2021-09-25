import "./Posts.css";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Posts() {
  const url = "https://jsonplaceholder.typicode.com";

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  // form data initialization;

  //getPost
  const getPosts = async () => {
    let { data } = await axios.get(`${url}/posts`);
    console.log(data);
    setPosts(data);
  };

  //get users details;

  const getUsers = async () => {
    let { data: user } = await axios.get(`${url}/users`);
    setUsers(users);
    console.log(user);
  };

  // delete post;

  const deletePost = async (id) => {
    console.log(id, "deleted");
    // let tempPosts = [...posts];
    // tempPosts = tempPosts.filter((tPost) => tPost.id !== id setPosts(tempPosts));
    const { data: deleteData } = await axios.delete(`${url}/posts/${id}`);
    console.log(deleteData);
    let deleted = [...posts];
    deleted = deleted.filter((d) => d.id !== id);
    setPosts(deleted);
  };

  // COMPONENT DID MOUNT()
  useEffect(() => {
    console.log("Mounted");
    getPosts();
    getUsers();
  }, []);

  return (
    <>
      <div className="mt">
        <h2 className="bg-primary text-danger ">Welcome to Posts </h2>
        <div>
          <button
            className="btn btn-success"
            data-toggle="collapse"
            data-target="#clps"
          >
            Add Post
          </button>
        </div>
        <div id="clps" className="c">
          <h3>Create Post</h3>
          <hr />
          <div className="bg-info p-3">
            <label>
              <b>Name:</b>
            </label>

            <input className="m-3" type="text"></input>
            <br />
            <label>
              <b>User ID</b>
            </label>

            <input className="m-3" type="text"></input>
            <br />
            <label>
              <b>Title</b>
            </label>

            <input className="m-3" type="text"></input>
            <br />
            <label>
              <b>Description</b>
            </label>

            <textarea className="m-3" type="textarea"></textarea>

            <button className="btn btn-success">Submit</button>
          </div>
        </div>
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
                  <hr />
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
    </>
  );
}
