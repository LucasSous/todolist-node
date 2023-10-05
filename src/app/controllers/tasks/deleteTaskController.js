import TasksRepository from "../../repositories/TasksRepository.js";

async function deleteTaskController(req, res) {
  try {
    const { id } = req.params;
    await TasksRepository.delete(id);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: "server error" });
  }
}

export default deleteTaskController;
