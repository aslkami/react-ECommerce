import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root", // 持久化挂在的对象， id="root" ,  我猜的
  storage, // localStorage的方式
  whiteList: ["cart"] // 需要持久化的模块
};

// export default combineReducers({
//   user: userReducer,
//   cart: cartReducer
// });

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
