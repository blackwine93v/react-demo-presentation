import React, { Component } from "react";
import "./index.css";

export default class extends Component {
  render() {
    if (!this.props.post) return null;
    return (
      <div className="post">
        <span className="title">{this.props.post.title}</span>
        <span className="content">{this.props.post.content}</span>
        <button onClick={() => this.props.removePost(this.props.post.id)}>
          Remove
        </button>
      </div>
    );
  }
}
