import express, { Request, Response } from "express";
import { Meeting } from "../model/Meeting";
import authValidation from "../middleware/authValidation";
import adminAuthValidation from "../middleware/adminAuthValidation";
import { User } from "../model/User";
const Router = express.Router();

// Create
Router.post(
  "/create",
  adminAuthValidation,
  async (req: Request, res: Response) => {
    try {
      const { title, description, datetime, club } = req.body;
      if (!title || !description || !datetime || !club) {
        return res.json({ done: false, err: "Incomplete data" });
      }
      const givenDate = new Date(datetime);
      const nowDate = new Date(Date.now());
      if (givenDate.toISOString() < nowDate.toISOString()) {
        return res.json({ done: false, err: "Invalid Date" });
      }
      const nextMeeting = {
        title,
        description,
        datetime,
        club,
      };
      await Meeting.create(nextMeeting);
      return res.json({ done: true });
    } catch (err) {
      console.log("my error: " + err);
      return res.json({ done: false, err: "Something went wrong!" });
    }
  }
);

// Read all
Router.get("/get_all", authValidation, async (req: Request, res: Response) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: any = req.query.year;
    if (!query) {
      const meetings = await Meeting.find({});
      return res.json({ data: meetings });
    }
    const year = parseInt(query.substring(0, 4));
    const meetings = await Meeting.find({
      datetime: {
        $gte: new Date(year, 0, 1),
        $lt: new Date(year + 1, 0, 1),
      },
    }).sort({ createdAt: "desc" });
    return res.json({ data: meetings });
  } catch (err) {
    console.log("my error: " + err);
    return res.json({ done: false, err: "Something went wrong" });
  }
});

// Update
Router.patch(
  "/update/:id",
  adminAuthValidation,
  async (req: Request, res: Response) => {
    try {
      const { title, description, datetime, club } = req.body;
      const ret = await Meeting.updateOne(
        { _id: req.params.id },
        { title, description, datetime, club }
      );
      return res.json({ done: true, data: ret });
    } catch (err) {
      console.log("my error: " + err);
      return res.json({ done: false, err: "Invalid id" });
    }
  }
);

// Register
Router.patch(
  "/register/:id",
  authValidation,
  async (req: Request, res: Response) => {
    try {
      const meetingId = req.params.id;
      // TODO: Take memberid from jwt token
      const { userId } = req.body;
      const meeting = await Meeting.findById(meetingId);
      if (!meeting) {
        return res.json({ done: false, err: "Meeting does not exists" });
      }
      const registers = meeting?.registered;
      if (!registers) {
        return res.json({ done: false, err: "Invalid meeting" });
      }
      for (let i = 0; i < registers.length; i++) {
        if (registers[i].userId === userId) {
          return res.json({ done: false, err: "You are already registered" });
        }
      }
      const user = await User.findById(userId);
      if (!user) {
        return res.json({ done: false, err: "Invalid user" });
      }
      const ret = await Meeting.updateOne(
        { _id: meetingId },
        {
          registered: [
            ...registers,
            // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
            { userId: userId, name: user?.username!, email: user?.email! },
          ],
        }
      );
      return res.json({ done: true, data: ret });
    } catch (err) {
      console.log("my error: " + err);
      return res.json({ done: false, err: "Something went wrong" });
    }
  }
);

// Delete
Router.delete(
  "/delete/:id",
  adminAuthValidation,
  async (req: Request, res: Response) => {
    try {
      const ret = await Meeting.deleteOne({ _id: req.params.id });
      return res.status(200).json({ data: ret });
    } catch (err) {
      console.log("my error: " + err);
      return res.json({ done: false, err: "Something went wrong" });
    }
  }
);

export default Router;
