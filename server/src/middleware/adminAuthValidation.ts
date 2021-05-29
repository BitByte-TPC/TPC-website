import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { User } from "../model/User";

const adminAuthValidation = async (
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

    // Check if clubs present in request
    const club = req.body.club;
    if (!club) {
      return res.json({ done: false, err: "Invalid request" });
    }

    const user = await User.findOne({ _id: payload.userId });
    if (!user) {
      return res.json({ done: false, err: "Invalid token" });
    }
    const clubAuth = user?.clubs?.find((e) => e.name === club)?.authority;
    if (!clubAuth && clubAuth !== "admin") {
      console.log(JSON.stringify(user.clubs));
      return res.json({ done: false, err: "Permission denied" });
    }

    next();
  } catch (err) {
    console.log("my error: " + err);
    return res.json({ done: false, err: "Something went wrong" });
  }
};

export default adminAuthValidation;
