import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.compontent";
import { selectCollection } from "../../redux/shop/shop.selectors";
import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <div className="title">{title}</div>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// ownProps 获取的是 当前页面所有的 props
const mapStateTpProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  };
};

export default connect(mapStateTpProps)(CollectionPage);
