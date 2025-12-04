import React from "react";
import "./Navbar.scss";
import Nav from "../Nav/Nav";
import NavToggle from "../NavToggle/NavToggle";
import ThemeToggler from "../ThemeToggle/ThemeToggler";

export default function Navbar() {
  return (
    <div className="navbar">
      <h3 className="navbar__heading">ALL BOARDS (3)</h3>
      <Nav />
      <ThemeToggler />
      <NavToggle />
    </div>
  );
}
