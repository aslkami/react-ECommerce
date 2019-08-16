import { createSelector } from "reselect";

const slectCart = state => state.cart; // 选择 cart 模块

export const selectCartItems = createSelector(
  [slectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartHidden = createSelector(
  [slectCart],
  cart => cart.hidden
);
