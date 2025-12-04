import React, { useState } from "react";
import "./NavToggle.scss";
import ToggleIcon_hide from "../../assets/icon-hide-sidebar.svg?react";

export default function NavToggle() {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="nav__toggle">
      <div className="nav__toggle-container">
        <ToggleIcon_hide />
        <h3  className="nav__toggle-text">Hide Sidebar</h3>
      </div>
    </div>
  );
}
