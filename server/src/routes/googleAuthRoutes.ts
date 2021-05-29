import express from "express";
import passport from "passport";
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
    res.redirect(
      // @ts-ignore
      process.env.CLIENT_URL + "/auth/google?user_id=" + req.user!._id
    );
    res.send("you reached the redirect URI");
  }
);

export default Router;
