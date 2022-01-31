import React from "react";
import "../App.css";
import ItemList from "./ItemList";
import {creds} from "../Data.js";
const styles = {
  form: {
    textAlign: "center",
  },
};
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isSubmitted: false,
      creds: [],
      error: false,
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  handleUsername(event) {
    this.setState({ username: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }
  handleSubmit = (event) => {
    //alert('A name was submitted: ' + this.state.username + '\nA password was submitted: ' +this.state.password);
    //console.log(this);
    const temp = this.state.creds.credentials.filter(
      (credobject) =>
        this.state.username === credobject.username &&
        this.state.password === credobject.password
    );
    //console.log(temp);
    if (temp.length === 0) {
      this.setState({
        username: "",
        password: "",
        error: true,
      });
      return;
    }
    this.setState({ isSubmitted: true, error: false });
  };
  componentDidMount() {
    this.setState((state, props) => ({
      error: state.error,
      creds: creds,
    }));
  }
  // shouldComponentUpdate(props,state){
  //   if(this.state.creds !== state.creds && this.state.username !== state.username && this.state.password !== state.password && this.state.error !== state.error){
  //     return true;
  //   }
  //   return false;
  // }
  render() {
    const isSubmitted = this.state.isSubmitted;
    if (isSubmitted) {
      return <ItemList />;
    }
    return (
      <div>
        <label style={styles.form}>
          <h2> Welcome to IMS</h2>
          Username
          <input
            type="text"
            className="input"
            value={this.state.username}
            onChange={this.handleUsername}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            className="input"
            value={this.state.password}
            onChange={this.handlePassword}
          />
        </label>
        <input
          type="submit"
          onClick={this.handleSubmit}
          className="btn"
          value="Login"
        />
        {this.state.error && "Invalid Credentials"}
      </div>
    );
  }
}
export default Login;
