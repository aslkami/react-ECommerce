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
- heroku config:set STRIPE_SECRET_KEY=sk_test_1FF4pVzdQ7Zt5jYoCr9HjJ9P00QzmXH5l9

7. npm install grpc --verbose --registry=https://registry.npm.taobao.org

8. redux-thunk, redux 的一个中间件， 可以使得 action 返回方法 而不是 对象， 并且可以在方法里进行数据获取，这样把获取数据的代码放在 action 里可以使得组件稍微整洁一点

9. compose 的作用就是解锁繁杂的写法 如 `withRouter(connect(mapStateToProps, mapDispatchToProps)(WithSpinner(xxxx)))`
   ```javascript
   import { compose } from "redux";
   compose(
     withRouter,
     connect(mapStateToProps),
     WithSpinner
   )(xxxx);
   ```

#### Questions

1. reselect 的原理是保存一份在内存，如果内存有则不在渲染页面, 那么为何 我更改了一个状态 另一个不同模块的状态也会更改
2. redux-persist 为什么会持久化所有 redux 数据 （因为我把 whitelist， 写成 whiteList, "L"）

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
