import express, { Request, Response } from "express";
import { Meeting } from "../model/Meeting";
import authValidation from "../middleware/authValidation";
const Router = express.Router();

// Create
Router.post("/create", authValidation, async (req: Request, res: Response) => {
  try {
    const { title, description, datetime, club } = req.body;
    if (!title || !description || !datetime || !club) {
      throw new Error("Something is missing in meeting data");
    }
    const nextMeeting = {
      title,
      description,
      datetime,
      club,
    };
    await Meeting.create(nextMeeting);
    res.status(200).json({ done: true });
  } catch (err) {
    console.log("my error: " + err);
  }
});

// Read all
Router.get("/get_all", authValidation, async (_: Request, res: Response) => {
  try {
    const meetings = await Meeting.find({});
    res.status(200).json({ data: meetings });
  } catch (err) {
    console.log("my error: " + err);
  }
});

// Update
Router.patch(
  "/update/:id",
  authValidation,
  async (req: Request, res: Response) => {
    try {
      const { title, description, datetime, club } = req.body;
      const ret = await Meeting.updateOne(
        { _id: req.params.id },
        { title, description, datetime, club }
      );
      res.status(200).json({ data: ret });
    } catch (err) {
      console.log("my error: " + err);
    }
  }
);

// Delete
Router.delete(
  "/delete/:id",
  authValidation,
  async (req: Request, res: Response) => {
    try {
      const ret = await Meeting.deleteOne({ _id: req.params.id });
      res.status(200).json({ data: ret });
    } catch (err) {
      console.log("my error: " + err);
    }
  }
);

export default Router;
