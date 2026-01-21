import React from "react";
import "./Header.scss";
import Logo_light from "../../assets/logo-dark.svg?react";
import Logo_dark from "../../assets/logo-light.svg?react";
import Elipsis from "../../assets/icon-vertical-ellipsis.svg?react";
import * as motion from "motion/react-client";
import { useModalStore } from "../stores/useModalStore";
import { useThemeStore } from "../stores/useThemeStore";

export default function Header() {
  const modalOpen = useModalStore((state) => state.toggleModalOpen);
  const theme = useThemeStore((state) => state.theme);

  return (
    <motion.div
      className="header"
      initial={{ y: `-100%` }}
      animate={{ y: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="logo__container">
        {theme === "dark" ? <Logo_dark /> : <Logo_light />}
      </div>
      <div className="content__container">
        <h1 className="content__heading">Platform Launch</h1>
        <button
          className="content__add-btn"
          onClick={() => modalOpen("ADD__TASK")}
        >
          + Add New Task
        </button>
        <Elipsis />
      </div>
    </motion.div>
  );
}
