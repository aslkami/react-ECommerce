import React, { lazy, Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
// import "./App.css";
import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";
import "./global.styles";
import { GlobalStyle } from "./global.styles";
// import CheckoutPage from "./pages/checkout/checkout.component";
import HomePage from "./pages/homepage/homepage.compontent";
import "./pages/homepage/homepage.styles.scss";
// import ShopPage from "./pages/shop/shop.compontent";
// import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
// const HomePage = lazy(() => import("./pages/homepage/homepage.compontent"));
const ShopPage = lazy(() => import("./pages/shop/shop.compontent"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);

const App = ({ currentUser, checkUserSession }) => {
  // 如果不传第二个参数， 每次登录登出 都会执行
  // 传 checkUserSession ，监听这个动作，如果有变化就才重新调用 checkUserSession
  // 就相当于和 componentDidMount 效果一致
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  // unsubscribeFromAuth = null;
  // componentDidMount() {
  // checkUserSession();
  // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //   if (userAuth) {
  //     const userRef = await createUserProfileDocument(userAuth);
  //     userRef.onSnapshot(snapshot => {
  //       setCurrentUser({
  //         id: snapshot.id,
  //         ...snapshot.data()
  //       });
  //     });
  //   } else {
  //     setCurrentUser(userAuth);
  //   }
  // });
  // }
  // componentWillUnmount() {
  //   this.unsubscribeFromAuth = null;
  // }

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            {/* <Route exact path="/sign" component={SignInAndSignUpPage} /> */}
            <Route
              exact
              path="/sign"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  // setCurrentUser: user => dispatch(setCurrentUser(user)),
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
