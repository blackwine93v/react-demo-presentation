import React, { Component } from "react";
import "./index.css";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addPost = this.addPost.bind(this);
    this.saveInput = this.saveInput.bind(this);
  }

  addPost(e) {
    e.preventDefault();
    this.props.addPost({
      title: this.state.title,
      content: this.state.content
    });
  }

  saveInput(fieldName, e) {
    var data = {};
    data[fieldName] = (e.target && e.target.value) || "";
    this.setState(data);
  }

  render() {
    return (
      <form className="create-post-form" onSubmit={this.addPost}>
        Post title:<br />
        <input
          type="text"
          name="title"
          onChange={this.saveInput.bind(this, "title")}
        />
        <br />
        Content:<br />
        <textarea
          name="content"
          onChange={this.saveInput.bind(this, "content")}
        />
        <br />
        <button type="submit">Add</button>
      </form>
    );
  }
}
