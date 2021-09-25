import "./Posts.css";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Posts() {
  const url = "https://jsonplaceholder.typicode.com";

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  // form data initialization;
  const [id, setId] = useState("");
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  //getPost , getUsers
  const getPosts = async () => {
    let { data } = await axios.get(`${url}/posts`);
    let { data: userData } = await axios.get(`${url}/users`);

    console.log(data); // post data
    console.log(userData); // user data
    setPosts(data);
    setUsers(userData);
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
    // getUsers();
  }, []);

  const handleChange = (event) => {
    if (event.target.name === "userId") {
      setUserId(event.target.value);
    }
  };

  return (
    <>
      <div className="mt container">
        <h2 className="bg-primary text-danger ">Welcome to Posts </h2>
        <div>
          <h2>All posts</h2>
          <button
            className="btn btn-dark"
            data-toggle="collapse"
            data-target="#form"
          >
            Add Post
          </button>
          <div id="form" className="collapse">
            <div className="container">
              <form>
                <div className="container">
                  <select className="form-control">
                    {users.map((userName) => {
                      return (
                        <option key={userName.id} value={userName.id}>
                          {userName.username}
                        </option>
                      );
                    })}
                  </select>
                  <div className="d-flex m-2">
                    <label className="form-group">user Id</label>
                    <input type="text" className="form-control"></input>
                    <label className="form-group">E-mail</label>
                    <input type="email" className="form-control"></input>
                  </div>
                </div>
              </form>
            </div>
            <button
              data-target="#form"
              data-toggle="collapse"
              onChange={handleChange}
            >
              submit
            </button>
          </div>
        </div>
        {/* <div>
          <button
            className="btn btn-success"
            data-toggle="collapse"
            data-target="#clps"
          >
            Add Post
          </button>
        </div>
        <div id="clps" className="panel-body collapse">
          <form>
            <div className="form-group">
              <select
                className="form-control"
                name="userId"
                value={userId}
                onChange={handleChange}
              >
                {users.map((user) => {
                  return (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </form>
        </div> */}
        {/* <div id="clps" className="c">
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

            <button
              className="btn btn-success"
              data-target="#clps"
              data-toggle="collapse"
            >
              Submit
            </button>
          </div>
        </div> */}
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
