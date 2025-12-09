import React from "react";
import "./NavToggle.scss";
import ShowNav from "../../assets/icon-show-sidebar.svg?react";
import { useNavTogglerStore } from "../Stores/useNavTogglerStore";

export default function NavToggleShow() {
  const toggleNav = useNavTogglerStore((state) => state.toggleNav);
  const navDisplay = useNavTogglerStore((state) => state.navDisplay);

  return (
    <button
      className={
        !navDisplay ? `nav-toggle-show` : `nav-toggle-show nav-toggle-show-hide`
      }
      onClick={toggleNav}
    >
      <ShowNav />
    </button>
  );
}
