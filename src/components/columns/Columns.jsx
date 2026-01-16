import React from "react";
import ColumnCard from "./ColumnCard";
import "./Columns.scss";

export default function Columns({ column, index }) {
  return (
    <div className="column">
      <h3 className="column__heading">
        <div className="column__heading-color"></div>
        {column.name} ({column.tasks.length})
      </h3>
      <ul>
        {column.tasks.map((task, i) => {
          const completedCount =
            task.subtasks?.filter((st) => st.isCompleted).length || 0;
          const totalCount = task.subtasks?.length || 0;
          return (
            <ColumnCard
              task={task}
              completedCount={completedCount}
              totalCount={totalCount}
              column={column.name}
              key={i}
            />
          );
        })}
      </ul>
    </div>
  );
}
