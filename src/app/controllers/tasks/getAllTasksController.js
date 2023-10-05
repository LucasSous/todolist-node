import TasksRepository from "../../repositories/TasksRepository.js";

async function getAllTasksController(_req, res) {
  try {
    const tasks = await TasksRepository.findAll();
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: "server error" });
  }
}

export default getAllTasksController;
