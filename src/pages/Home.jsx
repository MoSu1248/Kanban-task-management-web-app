import React from "react";
import "./Home.scss";
import Empty from "../components/Empty/Empty";
import { userBoardStore } from "../components/stores/useBoardStore";
import Columns from "../components/columns/Columns";
import { useModalStore } from "../components/stores/useModalStore";

export default function Home() {
  const { selectedBoardId, boards } = userBoardStore();
  const modalOpen = useModalStore((state) => state.toggleModalOpen);
  const dataList = boards.find((b) => b.name === selectedBoardId);

  if (!dataList?.columns || dataList?.columns?.length === 0) return <Empty />;

  return (
    <div className="column__container">
      {dataList?.columns?.map((column, index) => (
        <Columns column={column} key={index} />
      ))}
      <button
        className="column__add-btn"
        onClick={() =>
          modalOpen("EDIT__BOARD", {
            boardId: selectedBoardId,
          })
        }
      >
        + New Column
      </button>
    </div>
  );
}
