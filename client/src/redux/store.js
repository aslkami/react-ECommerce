import { applyMiddleware, createStore } from "redux";
import Logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducer";
import rootSagas from "./rootSagas";

// const middleware = [thunk];
const sagaMiddeware = createSagaMiddleware();

const middleware = [sagaMiddeware];

if (process.env.NODE_ENV === "development") {
  middleware.push(Logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddeware.run(rootSagas);

const persistor = persistStore(store);

export { store, persistor };
