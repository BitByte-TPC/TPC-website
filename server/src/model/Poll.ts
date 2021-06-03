import mongoose from "mongoose";

type optionType = {
  name: string;
  votes: number;
  _id: string;
};

interface PollInterface extends mongoose.Document {
  question: string;
  club: string;
  voters: { userId: string; optionId: string }[];
  options: optionType[];
}

const pollSchema: mongoose.Schema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    club: {
      type: String,
      required: true,
    },
    voters: [
      {
        userId: String,
        optionId: String,
      },
    ],
    options: [
      {
        name: {
          type: String,
          required: true,
        },
        votes: {
          type: Number,
          required: true,
          default: 0,
        },
      },
    ],
  },
  { timestamps: true }
);

const Poll: mongoose.Model<PollInterface> = mongoose.model("Poll", pollSchema);

export { Poll };
