import React from "react";
import "./Header.scss";
import Logo_light from "../../assets/logo-dark.svg?react";
import Elipsis from "../../assets/icon-vertical-ellipsis.svg?react";
import * as motion from "motion/react-client";

export default function Header() {
  return (
    <motion.div
      className="header"
      initial={{ y: `-100%` }}
      animate={{ y: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="logo__container">
        <Logo_light />
      </div>
      <div className="content__container">
        <h1 className="content__heading">Platform Launch</h1>
        <button className="content__add-btn">+ Add New Task</button>
        <Elipsis />
      </div>
    </motion.div>
  );
}
