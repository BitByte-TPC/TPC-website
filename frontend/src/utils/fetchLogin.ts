import { server } from "../store/global";
import { setToken } from "../store/tokenStore";

interface bodyTypes {
  email: string;
  username?: string;
  password: string;
}
export const fetchLogin = async (
  body: bodyTypes
): Promise<{ done: boolean }> => {
  const res = await fetch(server + "/api/user/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  if (data.done) {
    setToken(data.accessToken);
    return data;
  } else {
    return data;
  }
};
