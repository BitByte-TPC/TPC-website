import express from "express";
import passport from "passport";
import { shortToken } from "../utils/shortToken";
const Router = express.Router();

Router.get(
  "/",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

Router.get(
  "/redirect",
  passport.authenticate("google", { session: false, failureRedirect: "/" }),
  (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const token = shortToken(req.user as any);
    res.redirect(
      // @ts-ignore
      process.env.CLIENT_URL + "/auth/google?token=" + token
    );
  }
);

export default Router;
