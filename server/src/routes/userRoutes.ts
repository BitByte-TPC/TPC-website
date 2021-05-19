import express, { Request, Response } from "express";
import { User } from "../model/User";
const Router = express.Router();
import { compare, hash } from "bcryptjs";
import { getAccessToken, sendRefreshToken } from "../utils/tokenstuff";

// Login
Router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const gotUser = await User.findOne({ email: email });
    if (!gotUser) {
      // Todo: correct this to incorrect input or something
      throw new Error("User not found");
    }

    const correctPass = gotUser.password;
    const isValid = await compare(password, correctPass!);

    if (!isValid) {
      // Todo: correct this to incorrect input or something
      throw new Error("Incorrct password");
    } else {
      const token = getAccessToken(gotUser);
      sendRefreshToken(res, gotUser);
      res.status(200).json({
        done: true,
        accessToken: token,
      });
    }
  } catch (err) {
    console.log("my Error: " + err);
    res.json({
      done: false,
      error: err,
    });
  }
});

// Login with google
Router.get("/google-login/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const gotUser = await User.findOne({ _id: id });
    if (!gotUser) {
      // Todo: correct this to incorrect input or something
      throw new Error("User not found");
    }

    const token = getAccessToken(gotUser);
    sendRefreshToken(res, gotUser);
    res.status(200).json({
      done: true,
      accessToken: token,
    });
  } catch (err) {
    console.log("my Error: " + err);
    res.json({
      done: false,
      error: err,
    });
  }
});

// Register
Router.post("/register", async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      throw new Error("Invalid input");
    }
    const existingUser = await User.findOne({ email: email }).exec();
    if (existingUser) {
      throw new Error("Email already exist");
    }
    const hashedPassword = await hash(password, 12);

    const newUser = {
      username,
      email,
      password: hashedPassword,
    };

    User.create(newUser);
    res.status(200).json({ done: "true" });
  } catch (err) {
    console.log("my error: " + err);
    res.json({ done: false, error: err });
  }
});

// Reset Password
Router.post("/reset", async (req: Request, res: Response) => {
  try {
    const { email, password, newPassword } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("No user found");
    }
    const correctPassword = user.password;
    const isValid = await compare(password, correctPassword!);
    if (isValid) {
      const newPasswordHash = await hash(newPassword, 12);
      const payload = await User.updateOne(
        { _id: user._id },
        { password: newPasswordHash }
      );
      res.json(payload);
    } else {
      throw new Error("Incorrect Password");
    }
  } catch (err) {
    console.log("My Error: " + err);
    res.json({ ok: false, err: err });
  }
});

// Logout
Router.get("/logout", async (_req: Request, res: Response) => {
  try {
    await sendRefreshToken(res);
    res.status(200).json({ ok: true });
  } catch (err) {
    res.json({ ok: false, err: err });
  }
});

// TEST ROUTES BELOW NOT FOR PRODUCTION

// Test route to get all users
Router.get("/test", async (_, res: Response) => {
  try {
    const allUsers = await User.find({});
    res.json({ data: allUsers });
  } catch (err) {
    console.log(err);
    res.json({ done: false, err: err });
  }
});
// Delete user
Router.delete("/test/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = await User.deleteOne({ _id: id });
    res.json({ data });
  } catch (err) {
    console.log(err);
    res.json({ done: false, err: err });
  }
});

export default Router;
