import TasksRepository from "../../repositories/TasksRepository.js";

async function getTaskByIdController(req, res) {
  try {
    const { id } = req.params;
    const tasks = await TasksRepository.findById(id);
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: "server error" });
  }
}

export default getTaskByIdController;
