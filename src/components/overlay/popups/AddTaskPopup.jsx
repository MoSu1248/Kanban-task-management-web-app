import React, { use, useState } from "react";
import Cross from "../../../assets/icon-cross.svg?react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { userBoardStore } from "../../stores/useBoardStore";
import { useModalStore } from "../../stores/useModalStore";
import ChevDown from "../../../assets/icon-chevron-down.svg?react";
import ChevUp from "../../../assets/icon-chevron-up.svg?react";

export default function AddTaskPopup() {
  const { selectedBoardId, boards } = userBoardStore();
  const [col, setCol] = useState();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [subtasks, setSubtasks] = useState([{ title: "", isCompleted: false }]);
  const dataList = boards.find((b) => b.name === selectedBoardId);
  const closeModal = useModalStore((state) => state.toggleModalClose);

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

  const handleSubmit = async () => {
    const newTask = {
      title,
      description: desc,
      status: col,
      subtasks,
    };

    try {
      const boardRef = doc(db, "Boards", selectedBoardId);
      const boardSnap = await getDoc(boardRef);
      const boardData = boardSnap.data();

      const updatedColumns = boardData.columns.map((c) =>
        c.name === col ? { ...c, tasks: [...c.tasks, newTask] } : c,
      );

      await updateDoc(boardRef, { columns: updatedColumns });
      closeModal();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };
  const [dropDownState, setDropDownState] = useState(false);

  return (
    <form className="overlay__container" onSubmit={(e) => e.preventDefault()}>
      <div className="overlay__header">
        <h3>Add New Task</h3>
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
        onChange={(e) => setTitle(e.target.value)}
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
        onChange={(e) => setDesc(e.target.value)}
      />
      <label className="overlay__label" htmlFor="subTasks">
        Subtasks
      </label>
      <ul className="subTasks">
        {subtasks?.map((subtask, index) => (
          <li className="subTask" key={index}>
            <input
              key={index}
              type="text"
              placeholder={`Subtask ${index + 1}`}
              value={subtask.title}
              onChange={(e) => handleSubtaskChange(index, e.target.value)}
              className="subTask__input"
            />
            <button type="button" className="subTask__button">
              <Cross />
            </button>
          </li>
        ))}
      </ul>
      <button
        type="overlay__button"
        className="overlay__button-column"
        onClick={() =>
          setSubtasks((prev) => [...prev, { title: "", isCompleted: false }])
        }
      >
        + Add New Subtask
      </button>
      <label className="overlay__label" htmlFor="status">
        Status
      </label>
      <div class="dropdown" id="status">
        <button
          class="dropbtn"
          onClick={() => setDropDownState(!dropDownState)}
        >
          {col || "-"}
          {dropDownState == false ? <ChevDown /> : <ChevUp />}
        </button>
        {dropDownState && (
          <div class="dropdown-content">
            {dataList?.columns?.map((column, index) => (
              <button
                key={index}
                onClick={() => setCol(column.name)}
                className="drop__option"
              >
                {column.name}
              </button>
            ))}
          </div>
        )}
      </div>
      <button
        className="overlay__button"
        type="submit"
        onClick={() => handleSubmit()}
      >
        Create Task
      </button>
    </form>
  );
}
