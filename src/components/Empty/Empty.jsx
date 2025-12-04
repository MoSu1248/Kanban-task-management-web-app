import React from "react";
import "./Empty.scss";

export default function Empty() {
  return (
    <div className="empty">
      <h4 className="empty__text">
        This board is empty. Create a new column to get started.
      </h4>
      <button className="empty__btn">+ Add New Column</button>
    </div>
  );
}
