import React, { Component } from "react";
import Header from "../../components/header/index.js";

import "./index.css";

class MainLayout extends Component {
  render() {
    return (
      <div className="main-layout">
        <Header />
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}
export default MainLayout;
