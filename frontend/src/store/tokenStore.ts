import create from "zustand";
import { combine } from "zustand/middleware";

const useTokenStore = create(
  combine(
    {
      token: "",
    },
    (set) => ({
      setToken: (newToken: string) => {
        return set(() => ({
          token: newToken,
        }));
      },
    })
  )
);

export default useTokenStore;
