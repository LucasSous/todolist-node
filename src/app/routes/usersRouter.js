import express from "express";
import UsersController from "../controllers/UsersController.js";
import usersMiddleware from "../middlewares/usersMiddleware.js";

const usersRouter = express.Router();

usersRouter.get("/users", UsersController.getAll);
usersRouter.get(
  "/login",
  usersMiddleware.validateFieldEmail,
  usersMiddleware.validateFieldPassword,
  UsersController.userLogin
);
usersRouter.post(
  "/user",
  usersMiddleware.validateFieldName,
  usersMiddleware.validateFieldEmail,
  usersMiddleware.validateFieldPassword,
  UsersController.createUser
);

export default usersRouter;
