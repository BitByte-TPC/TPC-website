import express from "express";
import passport from "passport";
const Router = express.Router();

Router.get(
  "/",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
    // scope: ["https://www.googleapis.com/auth/plus.login"],
  })
);

Router.get(
  "/redirect",
  passport.authenticate("google", { session: false, failureRedirect: "/" }),
  (req, res) => {
    // @ts-ignore
    res.redirect(process.env.CLIENT_URL + "/auth/google?id=" + req.user!._id);
    res.send("you reached the redirect URI");
  }
);

export default Router;
