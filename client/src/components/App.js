import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage.js";
import LoginForm from "./Loginform.js";
import PrivateRoute from "./PrivateRoute.js";
import { connect } from "react-redux";
import { getData } from "../actions";

import "../styles/App.css";

class App extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (localStorage.getItem("data")) {
      this.props.getData(JSON.parse(localStorage.getItem("data")));
    }
  }

  render() {
    console.log("-----APP JS--------");
    return (
      <Router>
        <Route path="/login" component={LoginForm} />
        <PrivateRoute exact path="/homepage" component={HomePage} />
      </Router>
    );
  }
}

export default connect(
  null,
  { getData }
)(App);
