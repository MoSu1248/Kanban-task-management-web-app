import React from "react";
import "./Home.scss";
import Empty from "../components/Empty/Empty";
import { userBoardStore } from "../components/stores/useBoardStore";
import data from "../data/data.json";
import Columns from "../components/columns/Columns";
import { useModalStore } from "../components/stores/useModalStore";

export default function Home() {
  const { selectedBoardId } = userBoardStore();
  const dataBoards = data.boards;
  const modalOpen = useModalStore((state) => state.toggleModalOpen);

  const dataList = dataBoards.find((b) => b.name === selectedBoardId);
  if (!dataList) return <Empty />;

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
