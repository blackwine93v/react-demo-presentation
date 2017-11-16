import React, { Component } from "react";
import MainLayout from "./layouts/main/MainLayout.js";
import ListPostPage from "./pages/listPost/index.js";
import CreatePostPage from "./pages/createPost/index.js";

import _ from "lodash";
import "./App.css";
import { createStore } from "redux";

function generateID() {
  return _.uniqueId("POST_");
}

let allPost = [
  {
    id: generateID(),
    title: "Post 1",
    content: "This is post 1 content"
  },
  {
    id: generateID(),
    title: "Post 2",
    content: "This is post 2 content"
  },
  {
    id: generateID(),
    title: "Post 3",
    content: "This is post 3 content"
  }
];

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
function reducer(state = allPost, action) {
  switch (action.type) {
    case "CREATE":
      let newPost = {
        id: generateID(),
        title: action.payload.title,
        content: action.payload.content
      };

      let newState = [...state];
      newState.push(newPost);
      return newState;

    case "GET_ALL":
      return state;
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(reducer);

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
