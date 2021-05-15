import mongoose from "mongoose";

interface meetingInterface extends mongoose.Document {
  title: string;
  club: string;
  datetime: Date;
  description: string;
}

const meetingSchema: mongoose.Schema = new mongoose.Schema({
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
});

const Meeting: mongoose.Model<meetingInterface> = mongoose.model(
  "Meeting",
  meetingSchema
);

export { Meeting };
