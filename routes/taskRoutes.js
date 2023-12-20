import express from "express";
import {
  deleteTasks,
  myTasks,
  newTask,
  updateTasks,
} from "../controllers/taskController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, newTask);

router.get("/my", isAuthenticated, myTasks);

router
  .route("/:id")
  .put(isAuthenticated, updateTasks)
  .delete(isAuthenticated, deleteTasks);

export default router;
