import React, { Component } from "react";
import MainLayout from "./layouts/main/MainLayout.js";
import ListPostPage from "./pages/listPost/index.js";
import CreatePostPage from "./pages/createPost/index.js";
import Header from "./components/header/index.js";

import _ from "lodash";
import "./App.css";

//import react-router
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainLayout>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/posts" />} />
              <Route path="/posts" component={ListPostPage} />
              <Route path="/newpost" component={CreatePostPage} />

              <Route path="*" render={() => <h1>Not match 404</h1>} />
            </Switch>
          </div>
        </MainLayout>
      </div>
    );
  }
}

export default App;
