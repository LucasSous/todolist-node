import connection from '../db/connection.js';

class TasksRepository {
    findAll = async () => {
        const [tasks] = await connection.execute('SELECT * FROM tasks');
        return tasks;
    };

    findById = async (id) => {
        const query = 'SELECT * FROM tasks WHERE id = ?';
        const [tasks] = await connection.execute(query, [id]);
        return tasks;
    };

    create = async (task) => {
        const {title} = task;
        const dateUTC = new Date(Date.now()).toUTCString();
        const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?,?,?)';
        const [createdTask] = await connection.execute(query, [title, 'pendente', dateUTC]);
        return {insertId: createdTask.insertId};
    };

    update = async (id, task) => {
        const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';
        const {title, status} = task;
        const updatedTask = await connection.execute(query, [title, status, id]);
        return updatedTask;
    };

    delete = async (id) => {
        const removedTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
        return removedTask;
    };
};

export default new TasksRepository();