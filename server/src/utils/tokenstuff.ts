import { sign } from "jsonwebtoken";
import { userInterface as User } from "../model/User";
import { Response } from "express";

export const getAccessToken = (user: User): string => {
  return sign({ userId: user.id }, process.env.JWT_SECRET!, {
    expiresIn: "60m",
  });
};

export const sendRefreshToken = (res: Response, user?: User): void => {
  if (!user) {
    res.cookie("jid", "logout");
    return;
  }
  res.cookie(
    "jid",
    sign(
      { userId: user.id, tokenVersion: user.tokenVersion },
      process.env.JWT_REFRESH_SECRET!,
      {
        expiresIn: "24h",
      }
    ),
    {
      httpOnly: true,
      path: "/api/refresh_token",
    }
  );
};
