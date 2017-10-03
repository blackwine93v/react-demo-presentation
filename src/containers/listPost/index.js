import React, { Component } from "react";
import Post from "../../components/post/index.js";

export default class extends Component {
  render() {
    return (
      <div>
        {this.props.posts.map((post, index) => {
          return (
            <Post deletePost={this.props.deletePost} key={index} post={post} />
          );
        })}
      </div>
    );
  }
}
