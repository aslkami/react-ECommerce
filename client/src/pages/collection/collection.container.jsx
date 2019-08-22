import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "./../../components/with-spinner/with-spinner";
import CollectionPage from "./collection.component";

// 这里用回方法， 我猜是 因为返回的是 `布尔值` 而不是  `shop => shop.isFetching` 这种形式，
// 所以这里 不能简写成  `isLoading: ！selectIsCollectionsLoaded`
const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
