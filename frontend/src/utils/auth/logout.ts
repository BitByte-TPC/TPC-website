import { server } from "../../store/global";

export const logout = async (
  setToken: (newToken: string) => void
): Promise<boolean> => {
  setToken("");
  const res = await fetch(server + "/api/user/logout", {
    credentials: "include",
  });
  const payload = await res.json();
  return payload.done;
};
