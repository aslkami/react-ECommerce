import React, { Component } from "react";
import CollectionsPreview from "./../../components/collection-preview/collection-preview.compontent";
import SHOP_DATA from "./shopData";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...restProps }) => (
          <CollectionsPreview key={id} {...restProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
