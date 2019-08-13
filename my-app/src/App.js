import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { auth } from "./firebase/firebase.utils";
import Header from "./pages/header/header.component";
import HomePage from "./pages/homepage/homepage.compontent";
import "./pages/homepage/homepage.styles.scss";
import ShopPage from "./pages/shop/shop.compontent";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: ""
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth = null;
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
