import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./pages/header/header.component";
import HomePage from "./pages/homepage/homepage.compontent";
import "./pages/homepage/homepage.styles.scss";
import ShopPage from "./pages/shop/shop.compontent";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/sign" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
