import ShopActionTypes from "./shop.types";

export const updateCollections = payload => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload
});
