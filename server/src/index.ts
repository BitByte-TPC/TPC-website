import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import passport from "passport";
import cron from "node-cron";

import refreshTokenRoute from "./routes/refreshtoken";
import userRoute from "./routes/userRoutes";
import googleAuthRoutes from "./routes/googleAuthRoutes";
import meetingRoute from "./routes/meetingRoutes";
import pollRoutes from "./routes/pollRoutes";
import { Meeting } from "./model/Meeting";
// import { mailer } from "./config/mailer"; // Uncomment this in production
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
app.use("/api/poll", pollRoutes);
app.get("/", (_, res) => {
  res.send("hello world");
});

// EMAIL
cron.schedule("0 0 * * *", async () => {
  const data = await Meeting.find();
  const tom = new Date();
  tom.setDate(tom.getDate() + 1);
  data.forEach((e) => {
    const date = new Date(e.datetime);
    if (date.toISOString() <= tom.toISOString()) {
      console.log("sending mail...");
      // UNCOMMENT below in production
      // const registers = e.registered;
      // const earr = registers.map(e=>e.email);
      // const emails = earr.join(", ");
      // mailer(emails);
    }
  });
});

// LISTEN
const port = process.env.PORT ? process.env.PORT : 5000;
app.listen(port, () => {
  console.log(`server running on ${port}...`);
});
