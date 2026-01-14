import React from "react";
import { useModalStore } from "../stores/useModalStore";

export default function ColumnCard({
  task,
  i,
  completedCount,
  totalCount,
  column,
}) {
  const modalOpen = useModalStore((state) => state.toggleModalOpen);

  return (
    <li key={i} onClick={() => modalOpen("VIEW__TASK")}>
      {task.title}
      <span className="subtasks">
        ({completedCount} of {totalCount} subtasks completed )
      </span>
    </li>
  );
}
