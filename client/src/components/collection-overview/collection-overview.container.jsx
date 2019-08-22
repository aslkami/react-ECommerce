import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner";
import CollectionsOverview from "./collection-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionOverviewContainer;

// notice !!!
// 这里只是传递参数的封装， 并不渲染什么， 相当于是搬运工
