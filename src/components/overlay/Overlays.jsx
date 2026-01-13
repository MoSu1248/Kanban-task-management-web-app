import React from "react";
import "./Overlays.scss";
import AddTaskPopup from "./popups/AddTaskPopup";
import AddBoardPopup from "./popups/AddBoardPopup";
import EditBoardPopup from "./popups/EditBoardPopup";
import DeleteBoardPopup from "./popups/DeleteBoardPopup";

export default function Overlays() {
  return (
    <div className="overlay">
      {/* <AddTaskPopup /> */}
      {/* <AddBoardPopup /> */}
      {/* <EditBoardPopup /> */}
      <DeleteBoardPopup />
    </div>
  );
}
