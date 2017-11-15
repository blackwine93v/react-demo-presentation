import React, { Component } from "react";
import MainLayout from "./layouts/main/MainLayout.js";
import ListPostPage from "./pages/listPost/index.js";
import CreatePostPage from "./pages/createPost/index.js";
import Header from "./components/header/index.js";

import RouteInfo from "./components/routeInfo/index.js";

//import react-router
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

import _ from "lodash";
import "./App.css";

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
          <Router>
            <div>
              <Header />
              <Switch>
                {/* <Route path="/" render={() => <h1>DEMO APP</h1>} /> */}
                <Route exact path="/" render={() => <Redirect to="/posts" />} />
                <Route
                  path="/posts"
                  render={() => (
                    <ListPostPage
                      allPost={this.state.allPost}
                      removePost={this.removePost}
                    />
                  )}
                />
                <Route
                  path="/create"
                  render={() => <CreatePostPage addPost={this.addPost} />}
                />

                <Route path="/info" component={RouteInfo} />

                <Route path="*" render={() => <h1>Not match 404</h1>} />
              </Switch>
            </div>
          </Router>
        </MainLayout>
      </div>
    );
  }
}

export default App;
