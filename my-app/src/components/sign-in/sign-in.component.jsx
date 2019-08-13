import React from "react";
import CustomButton from "./../custom-button/custom-buttom.component";
import FormIpnut from "./../form-input/form-input.component";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account!</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormIpnut
            name="email"
            type="email"
            label="email"
            value={email}
            handleChange={this.handleChange}
          />
          <FormIpnut
            name="password"
            type="password"
            label="password"
            value={password}
            handleChange={this.handleChange}
          />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
