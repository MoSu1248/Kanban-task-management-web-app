import { create } from "zustand";

export const useModalStore = create((set) => ({
  modalState: false,
  modalType: null,

  toggleModalOpen: (type) => set(() => ({ modalState: true, modalType: type })),
  toggleModalClose: (type) =>
    set(() => ({ modalState: false, modalType: null })),
}));
