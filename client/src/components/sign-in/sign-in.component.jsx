import React, { useState } from "react";
import { connect } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart
} from "../../redux/user/user.actions";
import CustomButton from "./../custom-button/custom-buttom.component";
import FormIpnut from "./../form-input/form-input.component";
import "./sign-in.styles.scss";

const SignIn = ({ signWithEmail, signInWithGoogle }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    signWithEmail(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value }); // 这里如果是配置多个属性， 需要解构,
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account!</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormIpnut
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={handleChange}
        />
        <FormIpnut
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={handleChange}
        />

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDisptachToProps = dispatch => ({
  signInWithGoogle: () => dispatch(googleSignInStart()),
  signWithEmail: (email, password) =>
    dispatch(emailSignInStart({ email, password })) // payload 接收的 是对象
});

export default connect(
  null,
  mapDisptachToProps
)(SignIn);
