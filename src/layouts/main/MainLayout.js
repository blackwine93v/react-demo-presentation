import React, { Component } from "react";

import "./index.css";

class MainLayout extends Component {
  render() {
    return (
      <div className="main-layout">
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}
export default MainLayout;
