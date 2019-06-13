import React from "react";
import { logout } from "../actions";
import { connect } from "react-redux";

class HomePage extends React.Component {
  onLogout = e => {
    e.preventDefault();
    this.props.logout();
  };
  render() {
    return (
      <div>
        Yay!! Homepage here
        <button onClick={this.onLogout}> Logout </button>
      </div>
    );
  }
}
export default connect(
  null,
  { logout }
)(HomePage);
