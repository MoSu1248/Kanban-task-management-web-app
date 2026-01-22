import React, { useState } from "react";
import Cross from "../../../assets/icon-cross.svg?react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { userBoardStore } from "../../stores/useBoardStore";
import { useModalStore } from "../../stores/useModalStore";

export default function AddBoardPopup() {
  const { setSelectedBoardId } = userBoardStore();
  const closeModal = useModalStore((state) => state.toggleModalClose);

  const [boardName, setBoardName] = useState();
  const [status, setStatus] = useState([]);

  async function addBoardWithId(boardName, boardData) {
    try {
      const boardRef = doc(db, "Boards", boardName);
      await setDoc(boardRef, boardData);
      setSelectedBoardId(boardName);
      closeModal();
      console.log("Board created with ID:", boardName);
    } catch (error) {
      console.error("Error creating board:", error);
    }
  }

  function handleSubtaskChange(index, value) {
    setStatus((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        name: value,
      };
      return updated;
    });
  }

  return (
    <form className="overlay__container" onSubmit={(e) => e.preventDefault()}>
      <div className="overlay__header">
        <h3>Add New Board</h3>
      </div>
      <label className="overlay__label" htmlFor="addTitle">
        Name
      </label>
      <input
        type="text"
        name="addTitle"
        id="addTitle"
        placeholder="e.g. Web Design"
        className="overlay__input"
        onChange={(e) => setBoardName(e.target.value)}
      />
      <label className="overlay__label" htmlFor="subTasks">
        Columns
      </label>
      <ul className="subTasks">
        {status.map((subtask, index) => (
          <li className="subTask" key={index}>
            <input
              key={index}
              type="text"
              placeholder={`Column ${index + 1}`}
              value={subtask.title}
              onChange={(e) => handleSubtaskChange(index, e.target.value)}
            />
            <button type="button" className="subTask__button">
              <Cross />
            </button>
          </li>
        ))}
      </ul>
      <button
        className="overlay__button-column"
        onClick={() => setStatus((prev) => [...prev, { status: "" }])}
      >
        + Add New Column
      </button>
      <button
        className="overlay__button"
        type="submit"
        onClick={() =>
          addBoardWithId(boardName, {
            name: boardName,
            columns: status,
          })
        }
      >
        Create New Board
      </button>
    </form>
  );
}
