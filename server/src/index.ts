import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import refreshTokenRoute from "./routes/refreshtoken";
import userRoute from "./routes/userRoutes";
import googleAuthRoutes from "./routes/googleAuthRoutes";
import meetingRoute from "./routes/meetingRoutes";
import cookieParser from "cookie-parser";
import passport from "passport";
require("./config/google-oauth");

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(passport.initialize());

// DB
mongoose.connect(
  `${process.env.DATABASE_URL}`,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to db")
);

// ROUTES
app.use("/api", refreshTokenRoute);
app.use("/api/user", userRoute);
app.use("/api/auth/google", googleAuthRoutes);
app.use("/api/meeting", meetingRoute);
app.get("/", (_, res) => {
  res.send("hello world");
});

// LISTEN
const port = process.env.PORT ? process.env.PORT : 5000;
app.listen(port, () => {
  console.log(`server running on ${port}...`);
});
