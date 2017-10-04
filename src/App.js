import React, { Component } from "react";
import ListPost from "./containers/listPost/index.js";
import CreatePost from "./components/createPost/index.js";
import postsData from "./data/posts.js";
import _ from "lodash";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: postsData };
    this.addPost = this.addPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  addPost(data) {
    let newPost = {
      id: _.uniqueId("post_"),
      title: data.title,
      content: data.content
    };
    let postData = [...this.state.posts];
    postData.push(newPost);
    this.setState({ posts: postData });
  }

  deletePost(postId) {
    if (!postId) return;
    let postData = [...this.state.posts];
    _.remove(postData, post => post.id === postId);
    this.setState({ posts: postData });
  }

  render() {
    return (
      <div className="App">
        <CreatePost addPost={this.addPost} />
        <ListPost posts={this.state.posts} deletePost={this.deletePost} />
      </div>
    );
  }
}

export default App;
