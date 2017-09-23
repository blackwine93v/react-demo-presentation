import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default class extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">Posts</Link>
        <Link to="/newpost">New Post</Link>
      </div>
    );
  }
}
