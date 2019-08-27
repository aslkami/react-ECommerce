import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { signOutStart } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import ShopIcon from "./../cart-icon/cart-icon.component";
import {
  HeaderContainer,
  LogoContainer,
  OptionDiv,
  OptionLink,
  OptionsContainer
} from "./header.styles";

//  <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink> 这个写法等价于下面
//  <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>

const Header = ({ currentUser, hidden, signOut }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">shop</OptionLink>
        {/* <OptionLink to="/shop">contact</OptionLink> */}

        {currentUser ? (
          <OptionDiv onClick={signOut}>SIGN OUT</OptionDiv>
        ) : (
          <OptionLink to="/sign">Sign In</OptionLink>
        )}
        <ShopIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOutStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
