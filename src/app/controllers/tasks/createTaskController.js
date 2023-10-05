import TasksRepository from "../../repositories/TasksRepository.js";
import { StatusEnum } from "../../enums/statusEnum.js";

async function createTaskController(req, res) {
  try {
    const task = {
      title: req.body.title,
      status: StatusEnum.PENDENTE,
      userId: req.userId,
    };
    const createdTask = await TasksRepository.create(task);
    return res.status(201).json(createdTask);
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: "server error" });
  }
}

export default createTaskController;
