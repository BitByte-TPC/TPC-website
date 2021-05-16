import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { User } from "../model/User";

const authValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const accessToken = req.headers.authorization;
    if (!accessToken) {
      throw new Error("No Token");
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const payload: any = verify(accessToken, process.env.JWT_SECRET!);

    if (!payload) {
      throw new Error("No Payload");
    }

    const user = await User.findOne({ _id: payload.userId });

    if (user) {
      next();
    } else {
      res.json({ err: "NO TOKEn" });
    }
  } catch (err) {
    console.log("my error: " + err);
  }
};

export default authValidation;
