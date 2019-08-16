import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "./../../redux/cart/cart.selectors";
import CustomButton from "./../custom-button/custom-buttom.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems
// });

// const mapStateToProps = state => ({
//   cartItems: selectCartItems(state)
// });

const mapStateToProps = state => {
  console.log("和存储的属性不一样时，才重新计算渲染页面");
  return {
    cartItems: selectCartItems(state)
  };
};

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems
// });

export default connect(mapStateToProps)(CartDropdown);
