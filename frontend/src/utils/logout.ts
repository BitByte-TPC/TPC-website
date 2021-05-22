import { server } from "../store/global";
import { setToken } from "../store/tokenStore";

export const logout = async (): Promise<boolean> => {
  setToken("");
  const res = await fetch(server + "/api/user/logout");
  const payload = await res.json();
  return payload.ok;
};
