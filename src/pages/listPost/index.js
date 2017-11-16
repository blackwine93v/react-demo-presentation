import React, { Component } from "react";
import ListPost from "../../containers/listPost/index.js";
import { connect } from "react-redux";

import "./index.css";

class ListPostPage extends Component {
  render() {
    return (
      <div className="list-post-page">
        <ListPost allPost={[]} removePost={{}} />
      </div>
    );
  }
}

export default connect()(ListPostPage);
