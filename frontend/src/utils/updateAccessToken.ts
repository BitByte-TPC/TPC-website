import React from "react";
import { server } from "src/store/global";

export const updateAccessToken = async (
  setToken: (newToken: string) => void,
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>
): Promise<void> => {
  const res = await fetch(server + "/api/refresh_token", {
    credentials: "include",
  });
  const payload = await res.json();
  if (payload.ok) {
    setToken(payload.accessToken);
  }
  if (setLoading) setLoading(false);
};
