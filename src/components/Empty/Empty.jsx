import React from "react";
import "./Empty.scss";
import { useModalStore } from "../stores/useModalStore";
import { userBoardStore } from "../stores/useBoardStore";

export default function Empty() {
  const modalOpen = useModalStore((state) => state.toggleModalOpen);
  const { selectedBoardId, boards } = userBoardStore();

  return (
    <div className="empty">
      <h4 className="empty__text">
        This board is empty. Create a new column to get started.
      </h4>
      <button
        className="empty__btn"
        onClick={() =>
          modalOpen("EDIT__BOARD", {
            boardId: selectedBoardId,
          })
        }
      >
        + Add New Column
      </button>
    </div>
  );
}
