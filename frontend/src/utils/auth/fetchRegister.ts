import { server } from "../../store/global";
import { fetchLogin } from "./fetchLogin";

interface bodyTypes {
  email: string;
  username: string;
  password: string;
}
export const fetchRegister = async (
  body: bodyTypes,
  setToken: (newState: string) => void
): Promise<{ done: boolean }> => {
  const res = await fetch(server + "/api/user/register", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  if (data.done) {
    await fetchLogin(body, setToken);
    return data;
  } else {
    return data;
  }
};
