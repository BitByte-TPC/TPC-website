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
    const isValid = await compare(password, correctPass);

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
  }
});

// Register
Router.post("/register", async (req: Request, res: Response) => {
  try {
    const { username, email, password, clubs } = req.body;
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
      clubs,
    };

    User.create(newUser);
    res.status(200).json({ done: "true" });
  } catch (err) {
    console.log("my error: " + err);
    res.json({ done: false, err: err });
  }
});

// Test route to get all users
Router.get("/test", async (_, res: Response) => {
  try {
    const allUsers = await User.find({});
    res.json({ data: allUsers });
  } catch (err) {
    console.log(err);
    res.json({ err: err });
  }
});

export default Router;
