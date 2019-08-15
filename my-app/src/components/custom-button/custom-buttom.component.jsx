import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, inverted, ...restProps }) => {
  return (
    <button
      className={`
      ${inverted ? "inverted" : ""}
      ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      type="submit"
      {...restProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
