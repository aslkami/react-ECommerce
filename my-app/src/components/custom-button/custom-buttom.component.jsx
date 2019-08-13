import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...restProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      type="submit"
      {...restProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
