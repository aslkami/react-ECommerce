import React, { useState } from "react";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";
import CustomButton from "./../custom-button/custom-buttom.component";
import FormIpnut from "./../form-input/form-input.component";
import "./sign-up.styles.scss";

const SignUp = ({ signUp }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    displayName: ""
  });

  const { email, password, confirmpassword, displayName } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmpassword) {
      alert("Password don't match!");
      return;
    }

    signUp(displayName, email, password);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I don't have an account!</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormIpnut
          name="displayName"
          type="text"
          label="DisplayName"
          value={displayName}
          handleChange={handleChange}
        />
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
        <FormIpnut
          name="confirmpassword"
          type="password"
          label="Confirmpassword"
          value={confirmpassword}
          handleChange={handleChange}
        />

        <div className="buttons">
          <CustomButton type="submit">Sign up</CustomButton>
          {/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton> */}
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUp: (displayName, email, password) =>
    dispatch(signUpStart({ displayName, email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
