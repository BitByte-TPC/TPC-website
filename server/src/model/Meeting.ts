import mongoose from "mongoose";

type registeredType = {
  userId: string;
  name: string;
  email: string;
};
interface meetingInterface extends mongoose.Document {
  title: string;
  club: string;
  datetime: Date;
  description: string;
  registered: registeredType[];
}

const meetingSchema: mongoose.Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    club: {
      type: String,
      required: true,
    },
    datetime: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    registered: [
      {
        userId: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Meeting: mongoose.Model<meetingInterface> = mongoose.model(
  "Meeting",
  meetingSchema
);

export { Meeting };
