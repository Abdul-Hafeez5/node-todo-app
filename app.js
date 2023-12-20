import express from "express";
import userRouter from "./routes/usersRoutes.js";
import taskRouter from "./routes/taskRoutes.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

config({
  path: "./data/config.env",
});

// using middleware
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

// using Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

// Route
app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

// using error middleware
app.use(errorMiddleware);
