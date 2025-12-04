import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import './layout.scss'

export default function Layout({ children }) {
  return (
    <div className="app-layout">
      <Header />
        <Navbar />
      <main className="content">{children}</main>
    </div>
  );
}
