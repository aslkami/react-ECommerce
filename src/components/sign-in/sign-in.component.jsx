import React from "react";
import { connect } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart
} from "../../redux/user/user.actions";
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

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { signWithEmail } = this.props;
    signWithEmail(email, password);
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const { signInWithGoogle } = this.props;
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account!</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormIpnut
            name="email"
            type="email"
            label="Email"
            value={email}
            handleChange={this.handleChange}
          />
          <FormIpnut
            name="password"
            type="password"
            label="Password"
            value={password}
            handleChange={this.handleChange}
          />

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDisptachToProps = dispatch => ({
  signInWithGoogle: () => dispatch(googleSignInStart()),
  signWithEmail: (email, password) =>
    dispatch(emailSignInStart({ email, password })) // payload 接收的 是对象
});

export default connect(
  null,
  mapDisptachToProps
)(SignIn);
