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

let token = "";
export const setToken = (newToken: string): void => {
  token = newToken;
};
export const getToken = (): string => {
  return token;
};
