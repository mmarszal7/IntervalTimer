import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark" stylename="-webkit-app-region: drag">
      <span className="navbar-brand">Interval Timer</span>
    </nav>
  </header>
);

export default withRouter(connect()(Header));
