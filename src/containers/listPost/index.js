import postService from "../../services/posts.js";
import React, { Component } from "react";
import Post from "../../components/post/index.js";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    this.getPost = this.getPost.bind(this);
  }

  componentDidMount() {
    this.getPost();
  }

  getPost() {
    var self = this;
    postService
      .getAllPost()
      .then(function(res) {
        if (res && res.data) {
          self.setState({ posts: res.data });
        }
      })
      .catch(function(err) {
        debugger;
      });
  }

  render() {
    return (
      <div>
        {this.state.posts.map(function(post, index) {
          return <Post key={index} post={post} />;
        })}
      </div>
    );
  }
}
