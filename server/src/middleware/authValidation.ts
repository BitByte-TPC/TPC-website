import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { User } from "../model/User";

const authValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<Response<any, Record<string, any>> | void> => {
  try {
    const accessToken = req.headers.authorization?.split(" ")[1];
    if (!accessToken) {
      return res.json({ done: false, err: "No token" });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const payload: any = verify(accessToken, process.env.JWT_SECRET!);

    if (!payload) {
      return res.json({ done: false, err: "Bad token" });
    }

    const user = await User.findOne({ _id: payload.userId });

    if (user) {
      next();
    } else {
      return res.json({ done: false, err: "No token" });
    }
  } catch (err) {
    console.log("my error: " + err);
    return res.json({ done: false, err: "Something went wrong" });
  }
};

export default authValidation;
