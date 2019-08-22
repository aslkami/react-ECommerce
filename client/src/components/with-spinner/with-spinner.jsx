import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner = WrappedCompnent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedCompnent {...otherProps} />
  );
};

export default WithSpinner;

// console.log(otherProps); // 打印结果如下
// 👇👇👇👇👇👇👇👇👇👇👇
// dispatch: ƒ(action)
// history: { length: 2, action: "POP", location: { … }, createHref: ƒ, push: ƒ, … }
// location: { pathname: "/shop", search: "", hash: "", state: undefined, key: "0n68hc" }
// match: { path: "/shop", url: "/shop", isExact: true, params: { … } }
// staticContext: undefined
// __proto__: Object
