import React from "react";
import logoPlaceholder from "../resources/images/logo.svg";

import "./authPage.css";

export const Logo = ({ text }) => {
  return (
    <div className="auth-form-logo-container">
      <img
        src={logoPlaceholder}
        style={{
          background: "white",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "12%",
          marginTop: "auto",
        }}
      />
      <span>{text}</span>
    </div>
  );
};
