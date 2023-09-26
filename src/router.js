import express from 'express';
import TasksController from './app/controllers/TasksController.js';
import taskMiddleware from './app/middlewares/tasksMiddleware.js';

const router = express.Router();

router.get('/tasks', TasksController.getAll);
router.get('/task/:id', TasksController.getById);
router.post('/task', taskMiddleware.validateFieldTitle, TasksController.createTask);
router.delete('/task/:id', TasksController.deleteTask);
router.put('/task/:id', taskMiddleware.validateFieldTitle, taskMiddleware.validateFieldStatus, TasksController.updateTask);

export default router;