import React from "react";

export default function DeleteBoardPopup() {
  return (
    <form className="overlay__container">
      <h3 className="overlay__delete-header">Delete this board?</h3>
      <p className="overlay__delete-text">
        Are you sure you want to delete the ‘Platform Launch’ board? This action
        will remove all columns and tasks and cannot be reversed.
      </p>
      <div className="overlay__delete-btns">
        <button className="overlay__button-delete">Delete</button>
        <button className="overlay__button-cancel">Cancel</button>
      </div>
    </form>
  );
}
