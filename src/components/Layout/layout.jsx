import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import "./layout.scss";
import { useNavTogglerStore } from "../Stores/useNavTogglerStore";
import NavToggleShow from "../NavToggle/NavToggleShow";

export default function Layout({ children }) {
  const navDisplay = useNavTogglerStore((state) => state.navDisplay);

  return (
    <div className={navDisplay ? `app-layout` : `app-layout app-layout-hidden`}>
      <NavToggleShow />
      <Header />
      <Navbar />
      <main className="content">{children}</main>
    </div>
  );
}
