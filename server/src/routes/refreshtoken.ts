import express from "express";
import { User } from "../model/User";
import { getAccessToken, sendRefreshToken } from "../utils/tokenstuff";
import { verify } from "jsonwebtoken";
const Router = express.Router();

Router.get("/refresh_token", async (req, res) => {
  // console.log(req);
  const token = req.cookies.jid;
  if (!token) {
    console.log("token not found");
    res.send({ ok: false, accessToken: "" });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let payload: any = null;
  try {
    payload = verify(token, process.env.JWT_REFRESH_SECRET!);

    if (!payload) {
      console.log("payload not found");
      res.send({ ok: false, accessToken: "" });
    }

    const user = await User.findOne({ _id: payload.userId });

    if (!user) {
      console.log("user not found");
      res.send({ ok: false, accessToken: "" });
    }

    const jwt = getAccessToken(user!);

    if (user?.tokenVersion !== payload.tokenVersion) {
      console.log("invalid token version");
      res.send({ ok: false, accessToken: "" });
    }

    sendRefreshToken(res, user!);

    res.send({ ok: true, accessToken: jwt });
  } catch (err) {
    console.log("errrrr \n");
    console.log(err);
    res.send({ ok: false, accessToken: "" });
  }
});

export default Router;
