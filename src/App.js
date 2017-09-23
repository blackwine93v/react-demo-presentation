import React, { Component } from "react";
import MainLayout from "./layouts/main/MainLayout.js";
import ListPostPage from "./pages/listPost/index.js";
import CreatePostPage from "./pages/createPost/index.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <MainLayout>
            <Route exact path="/" component={ListPostPage} />
            <Route path="/newpost" component={CreatePostPage} />
          </MainLayout>
        </Router>
      </div>
    );
  }
}

export default App;
