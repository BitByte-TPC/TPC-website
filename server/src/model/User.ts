import mongoose from "mongoose";

interface userInterface extends mongoose.Document {
  username: string;
  googleId?: string;
  email: string;
  password?: string;
  tokenVersion: number;
  clubs?: string[];
  authority: "member" | "admin";
}

const userSchema: mongoose.Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  tokenVersion: {
    type: Number,
    required: true,
    default: 0,
  },
  clubs: {
    type: [String],
    required: false,
  },
  authority: {
    type: String,
    required: true,
    default: "member",
  },
});

const User: mongoose.Model<userInterface> = mongoose.model("User", userSchema);

export { User, userInterface };
