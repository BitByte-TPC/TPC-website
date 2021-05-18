/* eslint-disable @typescript-eslint/no-explicit-any */
import { server } from "../store/global";
import { setToken } from "../store/tokenStore";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const logout = async (history: any, url: string): Promise<void> => {
  setToken("");
  const res = await fetch(server + "/api/user/logout");
  const payload = await res.json();
  if (payload.ok) history.push(url);
};
