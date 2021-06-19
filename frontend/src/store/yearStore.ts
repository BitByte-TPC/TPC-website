import create from "zustand";
import { combine } from "zustand/middleware";

const useYearStore = create(
  combine(
    {
      year: new Date().getFullYear(),
    },
    (set) => ({
      nextYear: () => {
        return set((state) => ({
          year: state.year + 1,
        }));
      },
      prevYear: () => {
        return set((state) => ({
          year: state.year - 1,
        }));
      },
    })
  )
);

export default useYearStore;
