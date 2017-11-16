import React, { Component } from "react";
import ListPost from "../../containers/listPost/index.js";
import { connect } from "react-redux";

import "./index.css";

class ListPostPage extends Component {
  render() {
    return (
      <div className="list-post-page">
        <ListPost allPost={this.props.posts} />
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return { posts: reduxState };
  //access via this.props.posts
};
export default connect(mapStateToProps)(ListPostPage);
