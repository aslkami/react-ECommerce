import { applyMiddleware, createStore } from "redux";
import Logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

const middleware = [];

if (process.env.NODE_ENV === "development") {
  middleware.push(Logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

export { store, persistor };
