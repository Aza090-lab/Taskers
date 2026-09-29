 //====FUNÇÕES====
 const taskModel = require('../models/taskModel');

 // GET /tasks - Listar todas as tarefas
 const getAllTasks = (req, res) => {
    const tasks = taskModel.getAllTasks();
    res.status(200).render("allTasks", {tasks})
 };



 // GET /tasks/:id - Obter uma tarefa específica
 const getTaskId = (req, res) => {
    const { id } = req.query;
    const ID = id

    const task = taskModel.getTaskId(ID);
    
    if (!task) {
        res.status(404).render("getID", {task: null});
    }

    res.render("getID", {task});
 }



// GET /tasks/tasksCompleted - Listar as tarefas Feitas
const getTaskCompleted = (req, res) => {
   const tasks = taskModel.getCompleted();
   res.status(200).json(tasks);
};



// POST tasks/create - Criar uma nova tarefa
const createTask = (req, res) => {
   const newTask = taskModel.createTask(req.body);
   console.log(newTask);
   res.status(201).render("createTask", {newTask});
};



const deleteTaskId = (req, res) => {
   const { id } = req.body;

   const deletedTask = taskModel.deleteTaskId(id);
   console.log(deletedTask);

   res.status(200).render("delete", {deletedTask});
}



// POST tasks/create - Criar uma nova tarefa
const editTask = (req, res) => {
   const editedTask = taskModel.editTask(req.query);
   res.status(201).render("editedTask", {editedTask});
};



//====EXPORT====
module.exports = {
   getAllTasks ,
   getTaskId,
   getTaskCompleted,
   deleteTaskId,
   createTask,
   editTask
};
 