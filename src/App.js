import React, { Component } from "react";
import MainLayout from "./layouts/main/MainLayout.js";
import ListPostPage from "./pages/listPost/index.js";
import CreatePostPage from "./pages/createPost/index.js";

import _ from "lodash";
import "./App.css";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(reducer, applyMiddleware(logger));

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: "GET_ALL" });
store.dispatch({
  type: "CREATE",
  payload: { title: "Test Redux", content: "Content test" }
});

class App extends Component {
  constructor() {
    super();
    this.state = { allPost: allPost };
  }

  addPost = (title, content) => {
    let newPost = {
      id: generateID(),
      title,
      content
    };
    let allPost = [...this.state.allPost];
    allPost.push(newPost);
    this.setState({ allPost: allPost });
  };

  removePost = postID => {
    let allPost = [...this.state.allPost];
    _.remove(allPost, post => post.id === postID);
    this.setState({ allPost: allPost });
  };

  render() {
    return (
      <div className="App">
        <MainLayout>
          <ListPostPage
            allPost={this.state.allPost}
            removePost={this.removePost}
          />
          <CreatePostPage addPost={this.addPost} />
        </MainLayout>
      </div>
    );
  }
}

export default App;
