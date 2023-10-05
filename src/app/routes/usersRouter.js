import express from "express";
import usersMiddleware from "../middlewares/usersMiddleware.js";
import getAllUsersController from "../controllers/users/getAllUsersController.js";
import loginController from "../controllers/users/loginController.js";
import createUserController from "../controllers/users/createUserController.js";

const usersRouter = express.Router();

usersRouter.get("/users", getAllUsersController);
usersRouter.post(
  "/login",
  usersMiddleware.validateFieldEmail,
  usersMiddleware.validateFieldPassword,
  loginController
);
usersRouter.post(
  "/user",
  usersMiddleware.validateFieldName,
  usersMiddleware.validateFieldEmail,
  usersMiddleware.validateFieldPassword,
  createUserController
);

export default usersRouter;
