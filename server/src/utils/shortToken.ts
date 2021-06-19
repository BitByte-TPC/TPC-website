import { sign } from "jsonwebtoken";
import { userInterface as User } from "../model/User";

export const shortToken = (user: User): string => {
  return sign({ id: user.googleId }, process.env.JWT_SECRET!, {
    expiresIn: "15s",
  });
};
