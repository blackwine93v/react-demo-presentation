import React, { Component } from "react";
import CreatePost from "../../components/createPost/index.js";
import "./index.css";
export default class extends Component {
  render() {
    return (
      <div className="create-page">
        <CreatePost />
      </div>
    );
  }
}
