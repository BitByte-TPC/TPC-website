import express, { Request, Response } from "express";
import { Poll } from "../model/Poll";
import authValidation from "../middleware/authValidation";
import adminAuthValidation from "../middleware/adminAuthValidation";
import { verify } from "jsonwebtoken";
const Router = express.Router();

// Create
Router.post(
  "/create",
  adminAuthValidation,
  async (req: Request, res: Response) => {
    try {
      const { question, club, options } = req.body;
      if (!question || !club || !options) {
        return res.json({ done: false, err: "Incomplete data" });
      }
      const newPoll = {
        question,
        options,
        club,
      };
      await Poll.create(newPoll);
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
      const polls = await Poll.find({});
      return res.json({ data: polls });
    }
    const year = parseInt(query.substring(0, 4));
    const polls = await Poll.find({
      createdAt: {
        $gte: new Date(year, 0, 1),
        $lt: new Date(year + 1, 0, 1),
      },
    });
    return res.json({ data: polls });
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
      const { question } = req.body;
      const ret = await Poll.updateOne({ _id: req.params.id }, { question });
      return res.json({ done: true, data: ret });
    } catch (err) {
      console.log("my error: " + err);
      return res.json({ done: false, err: "Invalid id" });
    }
  }
);

// Vote
Router.patch(
  "/vote/:id",
  authValidation,
  async (req: Request, res: Response) => {
    try {
      const pollId = req.params.id;
      const { optionId } = req.body;
      const accessToken = req.headers.authorization?.split(" ")[1];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const payload: any = verify(accessToken!, process.env.JWT_SECRET!);
      const userId = payload.userId;
      if (!optionId) {
        console.log(optionId);
        return res.json({ done: false, err: "Invalid option" });
      }
      const poll = await Poll.findById(pollId);
      if (!poll) {
        return res.json({ done: false, err: "Poll does not exists" });
      }
      const options = poll?.options;
      const voters = poll.voters;
      if (!options) {
        return res.json({ done: false, err: "Invalid poll" });
      }
      const hasVotedBefore = poll.voters.find((e) => e.userId === userId);
      if (hasVotedBefore) {
        return res.json({ done: false, err: "You cannot vote again" });
      }

      const updatedOptions = options.map((e) => {
        if (e._id == optionId) {
          e.votes++;
        }
        return e;
      });

      const ret = await Poll.updateOne(
        { _id: pollId },
        {
          voters: [...voters, { userId, optionId }],
          options: updatedOptions,
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
      const ret = await Poll.deleteOne({ _id: req.params.id });
      return res.status(200).json({ done: true, data: ret });
    } catch (err) {
      console.log("my error: " + err);
      return res.json({ done: false, err: "Something went wrong" });
    }
  }
);

export default Router;
