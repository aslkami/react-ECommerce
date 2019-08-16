import SHOP_DATA from "./shopData";
const initialState = {
  collections: SHOP_DATA
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
