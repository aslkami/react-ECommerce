import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const initialState = {
  hidden: true,
  cartItems: []
};

//  { type, payload } 来自于 cart.actions.js 执行后的结果
const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        // cartItems: [...state.cartItems, payload]
        cartItems: addItemToCart(state.cartItems, payload)
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload)
      };
    case CartActionTypes.CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== payload.id
        )
      };
    default:
      return state;
  }
};

export default cartReducer;
