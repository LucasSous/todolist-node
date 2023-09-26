import TasksRepository from '../repositories/TasksRepository.js';

class TasksController {
    getAll = async (_req, resp) => {
        const tasks = await TasksRepository.findAll();
        return resp.status(200).json(tasks);
    };

    getById = async (req, resp) => {
        const {id} = req.params;
        const tasks = await TasksRepository.findById(id);
        return resp.status(200).json(tasks);
    }

     createTask = async (req, resp) => {
        const createdTask = await TasksRepository.create(req.body);
        return resp.status(201).json(createdTask);
    };
    
    updateTask = async (req, resp) => {
       const {id} = req.params;
       await TasksRepository.update(id, req.body);
       return resp.status(204).json();
    };

     deleteTask = async (req, resp) => {
        const {id} = req.params;
        await TasksRepository.delete(id);
        return resp.status(204).json();
    };
};


export default new TasksController();