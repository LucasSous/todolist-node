import connection from "../db/connection.js";

class TasksRepository {
  async findAll() {
    const [tasks] = await connection.execute("SELECT * FROM tasks");
    return tasks;
  }

  async findById(id) {
    const query = "SELECT * FROM tasks WHERE id = ?";
    const [tasks] = await connection.execute(query, [id]);
    return tasks;
  }

  async findByUserId(id) {
    const query = "SELECT * FROM tasks WHERE user_id = ?";
    const [tasks] = await connection.execute(query, [id]);
    return tasks;
  }

  async create(task) {
    const query = "INSERT INTO tasks(title, status, user_id) VALUES (?,?,?)";
    const [createdTask] = await connection.execute(query, Object.values(task));
    return { insertId: createdTask.insertId };
  }

  async update(id, task) {
    const query = "UPDATE tasks SET title = ?, status = ? WHERE id = ?";
    const { title, status } = task;
    const updatedTask = await connection.execute(query, [title, status, id]);
    return updatedTask;
  }

  async delete(id) {
    const removedTask = await connection.execute(
      "DELETE FROM tasks WHERE id = ?",
      [id]
    );
    return removedTask;
  }
}

export default new TasksRepository();
