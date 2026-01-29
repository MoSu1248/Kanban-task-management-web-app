import React, { useState } from "react";
import Cross from "../../../assets/icon-cross.svg?react";
import Elipsis from "../../../assets/icon-vertical-ellipsis.svg?react";
import { useModalStore } from "../../stores/useModalStore";
import { useOverlayOptionsStore } from "../../stores/useOverlayOptionsStore";
import OverlayOptions from "../../overlayOptions/OverlayOptions";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { userBoardStore } from "../../stores/useBoardStore";

export default function ViewTaskPopup({ payload }) {
  const { columnId, task } = payload;
  const [taskState, setTaskState] = useState(task);
  const { selectedBoardId } = userBoardStore();

  const { overlayOptionsState } = useOverlayOptionsStore();
  const toggleOptions = useOverlayOptionsStore((state) => state.toggleOptions);

  const completedCount =
    taskState.subtasks?.filter((st) => st.isCompleted).length || 0;

  const totalCount = taskState.subtasks?.length || 0;

  const toggleSubtask = async (subtaskIndex) => {
    try {
      const boardRef = doc(db, "Boards", selectedBoardId);
      const boardSnap = await getDoc(boardRef);
      const boardData = boardSnap.data();

      const updatedColumns = boardData.columns.map((column) => {
        if (column.name === columnId) {
          const updatedTasks = column.tasks.map((task) => {
            if (task.title === taskState.title) {
              const updatedSubtasks = task.subtasks.map((subtask, i) => {
                if (i === subtaskIndex) {
                  return { ...subtask, isCompleted: !subtask.isCompleted };
                }
                return subtask;
              });

              return { ...task, subtasks: updatedSubtasks };
            }
            return task;
          });

          return { ...column, tasks: updatedTasks };
        }
        return column;
      });

      await updateDoc(boardRef, { columns: updatedColumns });

      setTaskState((prev) => {
        const updated = [...prev.subtasks];
        updated[subtaskIndex] = {
          ...updated[subtaskIndex],
          isCompleted: !updated[subtaskIndex].isCompleted,
        };
        return { ...prev, subtasks: updated };
      });
    } catch (error) {
      console.error("Error toggling subtask:", error);
    }
  };

  return (
    <form className="overlay__container" onSubmit={(e) => e.preventDefault()}>
      <div className="overlay__header">
        <h3>{taskState.title}</h3>
        <div className="options__container">
          <button className="options__btn" onClick={toggleOptions}>
            <Elipsis />
            {overlayOptionsState && (
              <OverlayOptions task={task} columnId={columnId} />
            )}
          </button>
        </div>
      </div>
      <label className="overlay__description" htmlFor="addTitle">
        {taskState.description}
      </label>
      <label className="overlay__subtask-count" htmlFor="addTitle">
        ( {completedCount} of {totalCount} subtasks completed )
      </label>
      <div className="checkbox__wrapper">
        {taskState?.subtasks?.map((subtask, index) => (
          <div
            className="checkbox__container"
            key={index}
            onClick={() => toggleSubtask(index)}
          >
            <input
              type="checkbox"
              id={`subtask-${index}`}
              htmlFor={`subtask-${index}`}
              name="terms"
              value="accepted"
              onChange={() => toggleSubtask(index)}
              checked={subtask.isCompleted}
            />
            <label
              htmlFor={`subtask-${index}`}
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
