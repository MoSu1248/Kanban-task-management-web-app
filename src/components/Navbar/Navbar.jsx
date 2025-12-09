import React, { useState } from "react";
import "./Navbar.scss";
import Nav from "../Nav/Nav";
import NavToggle from "../NavToggle/NavToggleHide";
import ThemeToggler from "../ThemeToggle/ThemeToggler";
import { useNavTogglerStore } from "../Stores/useNavTogglerStore";
import * as motion from "motion/react-client";

export default function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const navDisplay = useNavTogglerStore((state) => state.navDisplay);

  return (
    <motion.div
      className={navDisplay ? `navbar` : `navbar navbar__hidden`}
    >
      <h3 className="navbar__heading">ALL BOARDS (3)</h3>
      <Nav />
      <ThemeToggler />
      <NavToggle showNav={showNav} />
    </motion.div>
  );
}
