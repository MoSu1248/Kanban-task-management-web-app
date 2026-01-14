import React from "react";
import Cross from "../../../assets/icon-cross.svg?react";

export default function EditBoardPopup() {
  return (
    <form className="overlay__container">
      <h3>Edit Board</h3>
      <label className="overlay__label" htmlFor="addTitle">
        Board Name
      </label>
      <input
        type="text"
        name="addTitle"
        id="addTitle"
        placeholder="e.g. Web Design"
        className="overlay__input"
        value={"Platform Launch"}
      />
      <label className="overlay__label" htmlFor="subTasks">
        Coloumns
      </label>
      <ul className="subTasks">
        <li className="subTask">
          {/* <label className="sr-only" htmlFor="subtask-1"></label> */}
          <input
            id="subtask-1"
            type="text"
            placeholder="e.g. Make coffee"
            className="subTask__input"
            value={"Todo"}
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
            value={"Doing"}
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
            value={"Doing"}
          />
          <button type="button" className="subTask__button">
            <Cross />
          </button>
        </li>
      </ul>
      <button className="overlay__button-column">+ Add New Column</button>
      <button className="overlay__button">Create Task</button>
    </form>
  );
}
