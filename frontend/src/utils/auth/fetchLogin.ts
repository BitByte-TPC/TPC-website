import { server } from "../../store/global";

interface bodyTypes {
  email: string;
  username?: string;
  password: string;
}
export const fetchLogin = async (
  body: bodyTypes,
  setToken: (newToken: string) => void
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
