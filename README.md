# react-ECommerce

1. withRouter, 给非路由组件传递 match，history，location 参数

- 不用在子组件传递属性，只需在子组件引入`withRouter`并导出的时候 `withRouter(component)`

2. firbase/filestore

```javascript
import firebase from "firebase/app";
import "firebase/firestore";
const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("xxx")
  .collection("cartItems")
  .doc("xxxx");
firestore.doc("users/xxx/cartItems/xxxx");
firestore.collection("users/xxx/cartItems");
```
