import React, { Component } from "react";
import ListPost from "../../containers/listPost/index.js";
import { connect } from "react-redux";
import { delelePost } from "../../actions/post";

import "./index.css";

class ListPostPage extends Component {
  render() {
    return (
      <div className="list-post-page">
        <ListPost
          allPost={this.props.posts}
          removePost={this.props.delelePost}
        />
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return { posts: reduxState };
  //access via this.props.posts
};

const mapDispatchToProps = dispatch => {
  return { delelePost: postId => dispatch(delelePost(postId)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListPostPage);
