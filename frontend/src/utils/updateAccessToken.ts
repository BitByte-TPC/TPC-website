import React from "react";
import { server } from "src/store/global";
import { setToken } from "src/store/tokenStore";

export const updateAccessToken = async (
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
