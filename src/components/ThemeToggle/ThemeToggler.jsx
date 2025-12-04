import React from "react";
import "./ThemeToggler.scss";
import Dark__theme from "../../assets/icon-dark-theme.svg?react";
import Light__theme from "../../assets/icon-light-theme.svg?react";

export default function ThemeToggler() {
  return (
    <div className="themeToggler">
      <div className="themeToggler__container">
        <Light__theme />
        <div className="toggle-placeholder"></div>
        <Dark__theme />
      </div>
    </div>
  );
}
