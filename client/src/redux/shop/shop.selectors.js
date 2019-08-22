import { createSelector } from "reselect";

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5
// };

export const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => {
    console.log(shop.collection);
    return shop.collections;
  }
);

export const selectCollectionsPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectCollections],
  collections => !!collections
);
