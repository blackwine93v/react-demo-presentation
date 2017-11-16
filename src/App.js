import React, { Component } from "react";
import MainLayout from "./layouts/main/MainLayout.js";
import ListPostPage from "./pages/listPost/index.js";
import CreatePostPage from "./pages/createPost/index.js";

import _ from "lodash";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainLayout>
          <ListPostPage />
          <CreatePostPage />
        </MainLayout>
      </div>
    );
  }
}

export default App;
