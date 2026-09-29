 //====VARIAVEIS====
 const taskModel = require('../models/taskModel');



 //====FUNÇÕES====
 const getTaskId = (req, res) => { //Busca uma Task pelo ID
    const { id } = req.query;
    const ID = id

    const task = taskModel.getTaskId(ID);
    
    if (!task) {
        res.status(404).render("getID", {task: null});
    }

    res.render("getID", {task});
 }



 const getAllTasks = (req, res) => { //Lista tds as Tasks
    const tasks = taskModel.getAllTasks();
    res.status(200).render("allTasks", {tasks})
 };



const getTaskCompleted = (req, res) => { //Lista tds as Tasks completas
   const tasks = taskModel.getCompleted();
   res.status(200).json(tasks);
};



// POST tasks/create - Criar uma nova tarefa
const createTask = (req, res) => { //Cria um nv Task
   const newTask = taskModel.createTask(req.body);
   console.log(newTask);
   res.status(201).render("createTask", {newTask});
};



const deleteTaskId = (req, res) => { //Deleta uma TAsk pelo ID
   const { id } = req.body;

   const deletedTask = taskModel.deleteTaskId(id);
   console.log(deletedTask);

   res.status(200).render("delete", {deletedTask});
}



const editTask = (req, res) => { //Edita uma Task pelo ID
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
 