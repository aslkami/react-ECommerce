import React from "react";
import { withRouter } from "react-router-dom";
import CollectionItem from "./../collection-item/collection-item.compontent";
import "./collection-preview.styles.scss";

const CollectionsPreview = ({ title, items, match, history }) => {
  return (
    <div className="collection-preview">
      <h1
        className="title"
        onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}
      >
        {title}
      </h1>
      <div className="preview">
        {items
          .filter((val, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionsPreview);
