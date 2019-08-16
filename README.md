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

3. reselect 的原理是保存一份在内存，如果内存有则不在渲染页面

   ```javascript
   // 没有用 reselect 的写法
   // const mapStateToProps = ({ cart: { cartItems } }) => ({
   //   cartItems
   // });

   // 用 reselect 的写法
   // const mapStateToProps = state => ({
   //   cartItems: selectCartItems(state)
   // });

   // 多个变量 不传参数 state 的写法
   import { createStructuredSelector } from "reselect";
   const mapStateToProps = createStructuredSelector({
     cartItems: selectCartItems
   });
   ```
