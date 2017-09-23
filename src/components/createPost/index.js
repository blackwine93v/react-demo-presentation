import React, { Component } from "react";
import postService from "../../services/posts.js";
import "./index.css";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.submit = this.submit.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  submit(e) {
    e.preventDefault();
    var title = e.target.title.value;
    var content = e.target.content.value;

    if (title && content) {
      this.createPost(title, content);
    }
  }

  createPost(title, content) {
    postService
      .createPost(title, content)
      .then(function(res) {
        alert("Successful!");
      })
      .catch(function(err) {
        debugger;
      });
  }

  render() {
    return (
      <form className="create-post-form" onSubmit={this.submit}>
        Post title:<br />
        <input type="text" name="title" />
        <br />
        Content:<br />
        <textarea name="content" />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
