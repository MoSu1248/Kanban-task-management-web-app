import React from "react";
import { useModalStore } from "../stores/useModalStore";

export default function ColumnCard({
  task,
  completedCount,
  totalCount,
  column,
}) {
  const modalOpen = useModalStore((state) => state.toggleModalOpen);

  return (
    <li
      onClick={() =>
        modalOpen("VIEW__TASK", {
          // boardId: board.name,
          columnId: column,
          task: task,
        })
      }
    >
      {task.title}
      <span className="subtasks">
        ({completedCount} of {totalCount} subtasks completed )
      </span>
    </li>
  );
}
