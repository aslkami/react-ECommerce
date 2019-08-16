import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

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
    default:
      return state;
  }
};

export default cartReducer;
