import express, { json } from "express";
import usersRouter from "./app/routes/usersRouter.js";
import tasksRouter from "./app/routes/tasksRouter.js";

const app = express();

app.use(json());
app.use(usersRouter);
app.use(tasksRouter);

export default app;
