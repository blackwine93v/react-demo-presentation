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

  saveInput(e) {
    if (!e.target) return;
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form className="create-post-form" onSubmit={this.addPost}>
        Post title:<br />
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.saveInput}
        />
        <br />
        Content:<br />
        <textarea
          name="content"
          value={this.state.content}
          onChange={this.saveInput}
        />
        <br />
        <button type="submit">Add</button>
      </form>
    );
  }
}
