import express from "express";
import taskMiddleware from "../middlewares/tasksMiddleware.js";
import verifyToken from "../middlewares/verifyTokenMiddleware.js";
import getAllTasksController from "../controllers/tasks/getAllTasksController.js";
import getTaskByIdController from "../controllers/tasks/getTasksByIdController.js";
import getTaskByUserIdController from "../controllers/tasks/getTaskByUserIdController.js";
import createTaskController from "../controllers/tasks/createTaskController.js";
import updateTaskController from "../controllers/tasks/updateTaskController.js";
import deleteTaskController from "../controllers/tasks/deleteTaskController.js";

const tasksRouter = express.Router();

tasksRouter.get("/tasks", getAllTasksController);
tasksRouter.get("/task/:id", getTaskByIdController);
tasksRouter.get("/task", verifyToken, getTaskByUserIdController);
tasksRouter.post(
  "/task",
  verifyToken,
  taskMiddleware.validateFieldTitle,
  createTaskController
);
tasksRouter.delete("/task/:id", verifyToken, deleteTaskController);
tasksRouter.put(
  "/task/:id",
  verifyToken,
  taskMiddleware.validateFieldTitle,
  taskMiddleware.validateFieldStatus,
  updateTaskController
);

export default tasksRouter;
