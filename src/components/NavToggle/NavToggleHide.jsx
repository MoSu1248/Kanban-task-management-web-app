import React, { useState } from "react";
import "./NavToggle.scss";
import ToggleIcon_hide from "../../assets/icon-hide-sidebar.svg?react";
import { useNavTogglerStore } from "../Stores/useNavTogglerStore";

export default function NavToggle() {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const toggleNav = useNavTogglerStore((state) => state.toggleNav);

  return (
    <div className="nav__toggle">
      <div className="nav__toggle-container" onClick={toggleNav}>
        <ToggleIcon_hide />
        <h3 className="nav__toggle-text">Hide Sidebar</h3>
      </div>
    </div>
  );
}
