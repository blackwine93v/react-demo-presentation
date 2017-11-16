import React, { Component } from "react";
import CreatePost from "../../components/createPost/index.js";
import "./index.css";
import { connect } from "react-redux";
import { createPost } from "../../actions/post";

class CreatePostPage extends Component {
  render() {
    return (
      <div className="create-page">
        <CreatePost addPost={this.props.createPost} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: (title, content) => dispatch(createPost(title, content))
  };
};
export default connect(null, mapDispatchToProps)(CreatePostPage);
