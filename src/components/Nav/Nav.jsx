import React, { useEffect } from "react";
import "./Nav.scss";
import Board from "../../assets/icon-board.svg?react";
import { userBoardStore } from "../stores/useBoardStore";
import { useNavTogglerStore } from "../stores/useNavTogglerStore";
import { useModalStore } from "../stores/useModalStore";

export default function Nav() {
  const navDisplay = useNavTogglerStore((state) => state.navDisplay);
  const modalOpen = useModalStore((state) => state.toggleModalOpen);

  const { boards, fetchBoards, loading, selectedBoardId, setSelectedBoardId } =
    userBoardStore();

  useEffect(() => {
    fetchBoards();
  }, [fetchBoards]);

  if (loading) return <p>Loading...</p>;
  if (!boards.length) return <p>No boards found</p>;

  return (
    <ul className={navDisplay ? `list` : `list list-hide`}>
      {boards.map((item, index) => (
        <li
          className={
            selectedBoardId === item.name ? `list__item active` : `list__item`
          }
          key={index}
          onClick={() => {
            setSelectedBoardId(item.name);
          }}
        >
          <Board />
          {item.name}
        </li>
      ))}
      <li
        className="list__item list__create"
        onClick={() => modalOpen("ADD__BOARD")}
      >
        <Board />+ Create New Board
      </li>
    </ul>
  );
}
