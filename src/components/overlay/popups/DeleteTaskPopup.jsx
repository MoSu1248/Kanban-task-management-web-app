import React from "react";

export default function DeleteTaskPopup() {
  return (
    <form className="overlay__container">
      <h3 className="overlay__delete-header overlay__header">Delete this task?</h3>
      <p className="overlay__delete-text">
        Are you sure you want to delete the ‘Build settings UI’ task and its
        subtasks? This action cannot be reversed.
      </p>
      <div className="overlay__delete-btns">
        <button className="overlay__button-delete">Delete</button>
        <button className="overlay__button-cancel">Cancel</button>
      </div>
    </form>
  );
}
