import { create } from "zustand";

export const useNavTogglerStore = create((set) => ({
  navDisplay: true,
  toggleNav: () => set((prev) => ({ navDisplay: !prev.navDisplay })),
}));
