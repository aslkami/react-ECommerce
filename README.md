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

4. dispatch 当使用 connect 的时候 默认传递， 如果简单的更改状态， 可以直接解构然后执行 方法，不必再写 mapDispatchToProps，详情见 cart-dropdown.component.jsx

5. UTF-8 Dingbats
6. heroku create xxx --buildpack https://github.com/mars/create-react-app-buildpack.git
   > https://github.com/mars/create-react-app-buildpack

- heroku create fatereact --buildpack https://github.com/mars/create-react-app-buildpack.git
- heroku create fatereact --buildpack mars/create-react-app

- heroku git:remote -a fatereact
- set git remote heroku to https://git.heroku.com/fatereact.git

7. npm install grpc --verbose
8. --registry=https://registry.npm.taobao.org

#### Questions

1. reselect 的原理是保存一份在内存，如果内存有则不在渲染页面, 那么为何 我更改了一个状态 另一个不同模块的状态也会更改
2. redux-persist 为什么会持久化所有 redux 数据
