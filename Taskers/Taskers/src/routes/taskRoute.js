//====ROTAS DE TASK====
//variaveis
const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

// Definindo as rotas para as operações CRUD -- Define qual rota faz oq...
router.get('/', taskController.getAllTasks);
router.get('/task', taskController.getTask);
router.get('/completed', taskController.getTaskCompleted );

router.get('/createmenu', taskController.OpenCreateTask);
router.post('/create', taskController.CreateTask );
router.delete('/delete', taskController.deleteTaskId);
router.get('/edit', taskController.editTask);


module.exports = router;
