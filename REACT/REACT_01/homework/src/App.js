import {useState, useEffect } from "react"

import "./App.css"

import User from "./components/User"
import Post from "./components/Post"
import Comment from "./components/Comment"

function App() {
  const [users, setUsers] = useState({})
  const [posts, setPosts] = useState({})
  const [comments, setComments] = useState({})
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(val => setUsers(val))
    fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(val => setPosts(val))
    fetch("https://jsonplaceholder.typicode.com/comments").then(res => res.json()).then(val => setComments(val))
  }, [])
  return (
    <div className="App">
      <div className="users">
        {users.length? users.map(user => <User key={user.id} user={user}/>) : false}
      </div>
      <div className="posts">
        {posts.length? posts.map(post => <Post key={post.id} post={post}/>) : false}
      </div>
      <div className="comments">
        {comments.length? comments.map(comment => <Comment key={comment.id} comment={comment} />) : false}
      </div>
    </div>
  );
}

export default App;
