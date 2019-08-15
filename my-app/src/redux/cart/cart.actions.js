import CartActionTypes from "./cart.types";

export const toggleCartHidden = payload => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

// 加入购物车
export const addItem = payload => ({
  type: CartActionTypes.ADD_ITEM,
  payload
});
