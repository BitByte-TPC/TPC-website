import mongoose from "mongoose";

type optionType = {
  name: string;
  votes: number;
};

interface PollInterface extends mongoose.Document {
  question: string;
  club: string;
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
    options: [
      {
        name: {
          type: String,
        },
        votes: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

const Poll: mongoose.Model<PollInterface> = mongoose.model("Poll", pollSchema);

export { Poll };
