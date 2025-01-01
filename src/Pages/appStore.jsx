// import create from "zustand";
// import { persist } from "zustand/middleware";

// let appStore=(set)=>({
//     dopen:true,
//     updateOpen:(dopen)=>set((state) => ({dopen:dopen})),
// });

// appStore=persist(appStore, {name:"my_app_store"});
// export const useAppStore=create(appStore);

import { create } from "zustand"; // Use named import
import { persist } from "zustand/middleware";

let appStore = (set) => ({
  dopen: true,
  updateOpen: (dopen) => set((state) => ({ dopen })),

   // Add rows and setRows for ProductList
   rows: [],
   setRows: (newRows) => set({ rows: newRows }),
});

appStore = persist(appStore, { name: "my_app_store" });
export const useAppStore = create(appStore);



