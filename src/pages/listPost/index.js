import React, { Component } from "react";
import ListPost from "../../containers/listPost/index.js";

import "./index.css";
export default class extends Component {
  render() {
    return (
      <div className="list-post-page">
        <ListPost />
      </div>
    );
  }
}
