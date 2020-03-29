import React from 'react';
import {
  Container,
  AppBar,
  Tabs,
  Tab,
  TextField,
  Button
} from '@material-ui/core';

interface AuthProps {

}

interface AuthState {
  value: String;
}

class Auth extends React.Component<AuthProps, AuthState> {
  constructor(props: any) {
    super(props);

    this.state = {
      value: "Login",
    };
    console.log("Should Work");
  }

  handleTabChange () {
    let newVal: String;
    this.setState({
      value: this.state.value === "Login" ? "Register" : "Login"
    })
  }

  render() {
    var FormComponent = `${this.state.value}Form`;
    return (
      <div className="auth">
        <Container>
          <AppBar position="static">
            <Tabs value={this.state.value} onChange={this.handleTabChange} aria-label="simple tabs example">
              <Tab label="Login"/>
              <Tab label="Register"/>
            </Tabs>
          </AppBar>
          <FormComponent />
        </Container>
      </div>
    );
  }
}

class LoginForm extends React.Component<{}, {}> {
  postResults(): void {

  }

  render() {
    return (
      <form className="form" autoComplete="off">
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          required
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          required
        />
        <Button type="submit" variant="contained" color="primary" onClick={this.postResults}>
          Primary
        </Button>
      </form>
    );
  }

}

class RegisterForm extends React.Component<{}, {}> {
  postResults(): void {

  }

  render() {
    return (
      <p>Register</p>
    );
  }

}


export default Auth;