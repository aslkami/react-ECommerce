import CartActionTypes from "./cart.types";

export const toggleCartHidden = payload => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

// 加入购物车 或者 增加 商品数量
export const addItem = payload => ({
  type: CartActionTypes.ADD_ITEM,
  payload
});

// 减少商品数量 或者 移除商品
export const removeItem = payload => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload
});

// 删除购物车商品
export const clearCartItem = payload => ({
  type: CartActionTypes.CLEAR_CART_ITEM,
  payload
});
