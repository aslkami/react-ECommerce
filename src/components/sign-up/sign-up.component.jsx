import React from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "./../custom-button/custom-buttom.component";
import FormIpnut from "./../form-input/form-input.component";
import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmpassword: "",
      displayName: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmpassword } = this.state;
    if (password !== confirmpassword) {
      alert("Password don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        email: "",
        displayName: "",
        password: "",
        confirmpassword: ""
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmpassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account!</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormIpnut
            name="displayName"
            type="text"
            label="DisplayName"
            value={displayName}
            handleChange={this.handleChange}
          />
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
          <FormIpnut
            name="confirmpassword"
            type="password"
            label="Confirmpassword"
            value={confirmpassword}
            handleChange={this.handleChange}
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
  }
}

export default SignUp;
