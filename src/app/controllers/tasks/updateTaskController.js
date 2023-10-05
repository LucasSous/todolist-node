import TasksRepository from "../../repositories/TasksRepository.js";

async function updateTaskController(req, res) {
  try {
    const { id } = req.params;
    await TasksRepository.update(id, req.body);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: "server error" });
  }
}

export default updateTaskController;
