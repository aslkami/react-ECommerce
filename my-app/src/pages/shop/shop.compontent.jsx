import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import {
  convertCollectsSnapshotToMap,
  firestore
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.ations";
import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "./../../components/collection-overview/collection-overview.component";

class ShopPage extends React.Component {
  unSubcribeFromAuth = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(snapshot => {
      const collectionsMap = convertCollectsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCollections: collection => dispatch(updateCollections(collection))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
