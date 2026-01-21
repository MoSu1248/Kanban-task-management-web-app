import React, { useState } from "react";
import Cross from "../../../assets/icon-cross.svg?react";
import Elipsis from "../../../assets/icon-vertical-ellipsis.svg?react";
import { useModalStore } from "../../stores/useModalStore";
import data from "../../../data/data.json";

export default function ViewTaskPopup({ payload }) {
  const { columnId, task } = payload;

  const [taskState, setTaskState] = useState(task);

  function toggleSubtask(index) {
    setTaskState((prev) => {
      const updated = [...prev.subtasks];
      updated[index] = {
        ...updated[index],
        isCompleted: !updated[index].isCompleted,
      };

      return {
        ...prev,
        subtasks: updated,
      };
    });
  }


  const completedCount =
    taskState.subtasks?.filter((st) => st.isCompleted).length || 0;
  const totalCount = taskState.subtasks?.length || 0;
  return (
    <form className="overlay__container">
      <div className="overlay__header">
        <h3>{taskState.title}</h3>
        <button className="overlay__options">
          <Elipsis />
        </button>
      </div>
      <label className="overlay__description" htmlFor="addTitle">
        {taskState.description}
      </label>
      <label className="overlay__subtask-count" htmlFor="addTitle">
        ( {completedCount} of {totalCount} subtasks completed )
      </label>
      <div className="checkbox__wrapper">
        {taskState.subtasks.map((subtask, index) => (
          <div
            className="checkbox__container"
            key={index}
            onClick={() => toggleSubtask(index)}
          >
            <input
              type="checkbox"
              id="terms"
              name="terms"
              value="accepted"
              onChange={() => toggleSubtask(index)}
              checked={subtask.isCompleted}
            />
            <label
              htmlFor="terms"
              className={
                !subtask.isCompleted
                  ? "checkbox__label"
                  : "checkbox__label checked"
              }
            >
              {subtask.title}
            </label>
          </div>
        ))}
      </div>
    </form>
  );
}
