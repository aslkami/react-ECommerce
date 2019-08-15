import { addItemToCart } from "./../../utils/cart.utils";
import CartActionTypes from "./cart.types";

const initialState = {
  hidden: true,
  cartItems: []
};

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
