import mongoose from "mongoose";

interface clubObj {
  name: string;
  authority: "member" | "admin";
}
interface userInterface extends mongoose.Document {
  username: string;
  googleId?: string;
  email: string;
  password?: string;
  tokenVersion: number;
  clubs?: clubObj[];
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
  clubs: [
    {
      name: {
        type: String,
      },
      authority: {
        type: String,
        enum: ["member", "admin"],
        default: "member",
      },
    },
  ],
});

const User: mongoose.Model<userInterface> = mongoose.model("User", userSchema);

export { User, userInterface };
