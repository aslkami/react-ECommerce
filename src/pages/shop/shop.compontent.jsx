import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchCollectionsStart } from "../../redux/shop/shop.ations";
import CollectionOverviewContainer from "./../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "./../collection/collection.container";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();

    // collectionRef.onSnapshot(snapshot => {
    //   const collectionsMap = convertCollectsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
