import React from "react";
import Cross from "../../../assets/icon-cross.svg?react";
import data from "../../../data/data.json";

export default function EditBoardPopup({ payload }) {
  const { boardId } = payload;
  const dataBoards = data.boards;
  const dataList = dataBoards.find((b) => b.name === boardId);

  return (
    <form className="overlay__container">
      <h3>Edit Board</h3>{" "}
      <label className="overlay__label" htmlFor="addTitle">
        Board Name
      </label>
      <input
        type="text"
        name="addTitle"
        id="addTitle"
        placeholder="e.g. Web Design"
        className="overlay__input"
        value={boardId}
      />{" "}
      <label className="overlay__label" htmlFor="subTasks">
        Columns
      </label>
      {dataList?.columns?.map((column, index) => (
        <div>
          <ul className="subTasks">
            <li className="subTask" key={index}>
              <input
                id="subtask-1"
                type="text"
                placeholder="e.g. Make coffee"
                className="subTask__input"
                value={column.name}
              />
              <button type="button" className="subTask__button">
                <Cross />
              </button>
            </li>
          </ul>
        </div>
      ))}
      <button className="overlay__button-column">+ Add New Column</button>
      <button className="overlay__button">Save Changes</button>
    </form>
  );
}
