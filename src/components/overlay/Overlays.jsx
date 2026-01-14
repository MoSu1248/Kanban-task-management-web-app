import React from "react";
import "./Overlays.scss";
import AddTaskPopup from "./popups/AddTaskPopup";
import AddBoardPopup from "./popups/AddBoardPopup";
import EditBoardPopup from "./popups/EditBoardPopup";
import DeleteBoardPopup from "./popups/DeleteBoardPopup";
import DeleteTaskPopup from "./popups/DeleteTaskPopup";
import EditTaskPopup from "./popups/EditTaskPopup";
import ViewTaskPopup from "./popups/ViewTaskPopup";
import { useModalStore } from "../stores/useModalStore";
import Cross from "../../assets/icon-cross.svg?react";

export default function Overlays() {
  const modalOpen = useModalStore((state) => state.modalState);
  const closeModal = useModalStore((state) => state.toggleModalClose);
  const { modalType } = useModalStore();
  const modalComponent = {
    ADD__TASK: AddTaskPopup,
    ADD__BOARD: AddBoardPopup,
    DELETE__BOARD: DeleteBoardPopup,
    DELETE__TASK: DeleteTaskPopup,
    EDIT__BOARD: EditBoardPopup,
    EDIT__TASK: EditTaskPopup,
    VIEW__TASK: ViewTaskPopup,
  };
  const ModalComponent = modalComponent[modalType];

  return (
    <>
      {modalOpen && (
        <div className="overlay" onClick={closeModal}>
          <div className="overlay__wrapper">
            <button type="button" className="close-btn" onClick={closeModal}>
              <Cross />
            </button>
            {ModalComponent ? <ModalComponent /> : null}
          </div>
        </div>
      )}
    </>
  );
}
