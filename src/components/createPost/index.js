import React, { Component } from "react";
import "./index.css";

export default class extends Component {
  submit = e => {
    e.preventDefault();
    var title = e.target.title.value;
    var content = e.target.content.value;

    if (title && content) {
      this.createPost(title, content);
    }
  };

  createPost = (title, content) => {
    this.props.addPost(title, content);
  };

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
