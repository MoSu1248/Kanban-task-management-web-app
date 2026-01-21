import { create } from "zustand";
import { db } from "../../firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";

export const userBoardStore = create((set) => ({
  boards: [],
  loading: false,
  selectedBoardId: null ,
  setSelectedBoardId: (id) => set({ selectedBoardId: id }),
   fetchBoards: () => {
    const unsub = onSnapshot(collection(db, "Boards"), (snapshot) => {
      const boardsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      set({ boards: boardsData });
    });
    return unsub; 
  },
}));
