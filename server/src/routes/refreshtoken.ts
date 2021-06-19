import express from "express";
import { User } from "../model/User";
import { getAccessToken } from "../utils/tokenstuff";
import { verify } from "jsonwebtoken";
const Router = express.Router();

Router.get("/refresh_token", async (req, res) => {
  try {
    const token = req.cookies.jid;
    if (!token) {
      throw new Error("token not found");
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let payload: any = null;
    payload = verify(token, process.env.JWT_REFRESH_SECRET!);

    if (!payload) {
      throw new Error("payload not found");
    }

    const user = await User.findOne({ _id: payload.userId });

    if (!user) {
      throw new Error("user not found");
    }

    const jwt = getAccessToken(user!);

    if (user?.tokenVersion !== payload.tokenVersion) {
      throw new Error("invalid token version");
    }

    res.send({ ok: true, accessToken: jwt });
  } catch (err) {
    console.log("My Error: \n");
    console.log(err);
    res.send({ ok: false, accessToken: "", err: err });
  }
});

export default Router;
