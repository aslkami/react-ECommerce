import { applyMiddleware, createStore } from "redux";
import Logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

const middleware = [Logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

export { store, persistor };
