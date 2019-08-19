import ShopActionTypes from "./shop.types";
import SHOP_DATA from "./shopData";

const initialState = {
  collections: SHOP_DATA
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload
      };
    default:
      return state;
  }
};
