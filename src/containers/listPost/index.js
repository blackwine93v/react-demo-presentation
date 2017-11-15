import React, { Component } from "react";
import Post from "../../components/post/index.js";

export default class extends Component {
  render() {
    return (
      <div>
        {this.props.allPost.map((post, index) => {
          return (
            <Post
              key={post.id}
              post={post}
              removePost={this.props.removePost}
            />
          );
        })}
      </div>
    );
  }
}
