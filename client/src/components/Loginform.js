import React from "react";
import { login } from "../actions";
import { connect } from "react-redux";

class LoginForm extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };
  componentDidMount() {
    if (this.props.location.state) {
      console.log(":: LOCATION STATE ::" + this.props.location.state);
      if (
        this.props.location.state.username &&
        this.props.location.state.password
      ) {
        this.setState({
          credentials: {
            username: this.props.location.state.username,
            password: this.props.location.state.password
          }
        });
      }
    }
  }

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  onLogin = e => {
    e.preventDefault();
    console.log(
      ":::::ON LOGIN ::::::" + JSON.stringify(this.state.credentials)
    );
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/homepage");
    });
  };

  render() {
    console.log("-----------LOGIN FORM---------------");
    return (
      <div>
        <form>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.credentials.username}
            onChange={this.handleChanges}
          />
          <input
            type="text"
            name="password"
            placeholder="password"
            value={this.state.credentials.password}
            onChange={this.handleChanges}
          />
          <button onClick={this.onLogin}> Login </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(LoginForm);
