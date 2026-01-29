import React from "react";
import Cross from "../../../assets/icon-cross.svg?react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { userBoardStore } from "../../stores/useBoardStore";
import { useState } from "react";
import ChevDown from "../../../assets/icon-chevron-down.svg?react";
import ChevUp from "../../../assets/icon-chevron-up.svg?react";
import { useModalStore } from "../../stores/useModalStore";

export default function AddTaskPopup({ payload }) {
  const { columnId, task } = payload;
  const [taskState, setTaskState] = useState(task);
  const [dropDownState, setDropDownState] = useState(false);
  const { selectedBoardId, boards } = userBoardStore();
  const dataList = boards.find((b) => b.name === selectedBoardId);

  const [taskTitle, setTaskTitle] = useState(task.title);
  const [taskDescription, setTaskDescription] = useState(task.description);
  const [subtasks, setSubtasks] = useState(task.subtasks);
  const [status, setStatus] = useState(task.status);
  const modalOpen = useModalStore((state) => state.toggleModalOpen);

  const editTask = async () => {
    try {
      const boardRef = doc(db, "Boards", selectedBoardId);
      const boardSnap = await getDoc(boardRef);
      const boardData = boardSnap.data();

      const updatedColumns = boardData.columns.map((column) => {
        if (column.name === columnId) {
          const updatedTasks = column.tasks.map((t) => {
            if (t.title === task.title) {
              return {
                ...t,
                title: taskTitle,
                description: taskDescription,
                status: status,
                subtasks: subtasks,
              };
            }
            return t;
          });

          return { ...column, tasks: updatedTasks };
        }
        return column;
      });

      await updateDoc(boardRef, { columns: updatedColumns });
      modalOpen("VIEW__TASK", {
        // boardId: board.name,
        columnId: columnId,
        task: task,
      });
    } catch (error) {
      console.error("Error editing task:", error);
    }
  };

  function handleSubtaskChange(index, value) {
    setSubtasks((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        title: value,
      };
      return updated;
    });
  }

  return (
    <form className="overlay__container" onSubmit={(e) => e.preventDefault()}>
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
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
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
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <label className="overlay__label" htmlFor="subTasks">
        Subtasks
      </label>
      <ul className="subTasks">
        {subtasks?.map((subtask, index) => (
          <li className="subTask" key={index}>
            {/* <label className="sr-only" htmlFor="subtask-1"></label> */}
            <input
              id={`subtask-${index}`}
              type="text"
              placeholder="e.g. Make coffee"
              className="subTask__input"
              value={subtask.title}
              onChange={(e) => handleSubtaskChange(index, e.target.value)}
            />
            <button type="button" className="subTask__button">
              <Cross />
            </button>
          </li>
        ))}
      </ul>
      <label className="overlay__label" htmlFor="status">
        Status
      </label>
      <div class="dropdown" id="status">
        <button
          className="dropbtn"
          onClick={() => setDropDownState(!dropDownState)}
        >
          {status || "-"}
          {dropDownState == false ? <ChevDown /> : <ChevUp />}
        </button>
        {dropDownState && (
          <div class="dropdown-content">
            {dataList?.columns?.map((column, index) => (
              <button
                key={index}
                onClick={() => setStatus(column.name)}
                className="drop__option"
              >
                {column.name}
              </button>
            ))}
          </div>
        )}
      </div>
      <button className="overlay__button" onClick={() => editTask()}>
        Save Changes
      </button>
    </form>
  );
}
