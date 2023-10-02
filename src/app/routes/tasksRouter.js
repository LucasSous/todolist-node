import express from "express";
import TasksController from "../controllers/TasksController.js";
import taskMiddleware from "../middlewares/tasksMiddleware.js";
import verifyToken from "../middlewares/verifyTokenMiddleware.js";

const tasksRouter = express.Router();

tasksRouter.get("/tasks", TasksController.getAll);
tasksRouter.get("/task/:id", TasksController.getById);
tasksRouter.post(
  "/task",
  verifyToken,
  taskMiddleware.validateFieldTitle,
  TasksController.createTask
);
tasksRouter.delete("/task/:id", verifyToken, TasksController.deleteTask);
tasksRouter.put(
  "/task/:id",
  verifyToken,
  taskMiddleware.validateFieldTitle,
  taskMiddleware.validateFieldStatus,
  TasksController.updateTask
);

export default tasksRouter;
