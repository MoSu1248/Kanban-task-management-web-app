import React from "react";
import "./Nav.scss";
import Board from "../../assets/icon-board.svg?react";
import data from "../../data/data.json";
export default function Nav() {
  const dataBoards = data.boards; // boards is the array

  return (
    <ul className="list">
      {dataBoards.map((item, index) => (
        <li className="list__item active" key={index}>
          <Board />
          {item.name}
        </li>
      ))}
    </ul>
  );
}
