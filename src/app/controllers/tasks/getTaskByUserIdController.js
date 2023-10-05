import TasksRepository from "../../repositories/TasksRepository.js";

async function getTaskByUserIdController(req, res) {
  try {
    const id = req.userId;
    const tasks = await TasksRepository.findByUserId(id);
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: "server error" });
  }
}

export default getTaskByUserIdController;
