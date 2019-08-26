import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsPreview } from "../../redux/shop/shop.selectors";
import CollectionsPreview from "../collection-preview/collection-preview.component";
import "./collection-overview.styles.scss";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...restProps }) => (
        <CollectionsPreview key={id} {...restProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
