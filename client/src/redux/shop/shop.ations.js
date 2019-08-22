import {
  convertCollectsSnapshotToMap,
  firestore
} from "../../firebase/firebase.utils";
import ShopActionTypes from "./shop.types";

export const updateCollections = payload => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload
});

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = payload => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload
});

export const fetchCollectionsFailure = payload => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    dispatch(fetchCollectionsStart()); // loading start

    const collectionRef = firestore.collection("collections");
    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => {
        dispatch(fetchCollectionsFailure(error));
      });
  };
};
