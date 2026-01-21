import React from "react";
import Cross from "../../../assets/icon-cross.svg?react";

export default function AddTaskPopup() {
  return (
    <form className="overlay__container">
      <div className="overlay__header">
        <h3>Edit Task</h3>
      </div>
      <label className="overlay__label" htmlFor="addTitle">
        Title
      </label>
      <input
        type="text"
        name="addTitle"
        id="addTitle"
        placeholder="e.g. Take coffee break"
        className="overlay__input"
      />
      <label className="overlay__label" htmlFor="addTitle">
        Description
      </label>
      <textarea
        type="text"
        name="addTitle"
        id="addTitle"
        placeholder="e.g. It’s always good to take a break. This 15 minute break will 
        recharge the batteries a little."
        className="overlay__textarea"
      />
      <label className="overlay__label" htmlFor="subTasks">
        Subtasks
      </label>
      <ul className="subTasks">
        <li className="subTask">
          {/* <label className="sr-only" htmlFor="subtask-1"></label> */}
          <input
            id="subtask-1"
            type="text"
            placeholder="e.g. Make coffee"
            className="subTask__input"
          />
          <button type="button" className="subTask__button">
            <Cross />
          </button>
        </li>
        <li className="subTask">
          {/* <label className="sr-only" htmlFor="subtask-2"></label> */}
          <input
            id="subtask-2"
            type="text"
            placeholder="e.g. Drink coffee & smile"
            className="subTask__input"
          />
          <button type="button" className="subTask__button">
            <Cross />
          </button>
        </li>
      </ul>
      <label className="overlay__label" htmlFor="status">
        Status
      </label>
      <input
        type="text"
        name="addTitle"
        id="addTitle"
        placeholder="e.g. Take coffee break"
        className="overlay__input"
      />
      <button className="overlay__button">Save Changes</button>
    </form>
  );
}
