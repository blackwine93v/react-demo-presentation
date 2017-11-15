import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default class extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/posts">Posts</Link>
        <Link to="/create">New Post</Link>
      </div>
    );
  }
}
