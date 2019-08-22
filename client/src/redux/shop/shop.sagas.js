import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  convertCollectsSnapshotToMap,
  firestore
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess
} from "./shop.ations";
import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  yield console.log("sagas!!!");

  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectsSnapshotToMap, snapshot); // call(fn, params)
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
