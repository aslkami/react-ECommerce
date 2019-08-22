import { all, call, put, takeLatest } from "redux-saga/effects";
import UserActionTypes from "./../user/user.types";
import { clearCart } from "./cart.actions";

export function* clearCartAsync() {
  yield put(clearCart());
}

export function* clearCartStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartAsync);
}

export function* cartSagas() {
  yield all([call(clearCartStart)]);
}
