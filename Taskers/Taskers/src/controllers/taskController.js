 //====VARIAVEIS====
 const taskModel = require('../models/taskModel');



 //====FUNÇÕES====
 const getTaskId = (req, res) => { //Busca uma Task pelo ID
    const { id } = req.query;

    const task = taskModel.getTaskId(id);
    
    if (!task) {
        res.status(404).render("getID", {task : 'A Task não encontrada!'});
    }

    res.render("getID", {task});
 }



 const getAllTasks = (req, res) => { //Lista tds as Tasks
    const tasks = taskModel.getAllTasks();

    if (tasks.length == 0) {
      res.render("allTasks",{tasks : "Nenhuma Task foi encontrada!"});
    }

    res.status(200).render("allTasks", {tasks});
 };



const getTaskCompleted = (req, res) => { //Lista tds as Tasks completas
   const tasks = taskModel.getCompleted();

   if (tasks.length == 0) {
      res.render("allTasks",{tasks : "Nenhuma Task completa foi encontrada!"});
    }

   res.status(200).json(tasks);
};




const createTaskMenu = (req, res) => {
   req.body;
   res.status(201).render("createTask");
};

const createTask = (req, res) => { //Cria um nv Task
   const newTask = taskModel.createTask(req.body);
   console.log(newTask);
   res.status(201).render("home copy", {newTask});
};



const deleteTaskId = (req, res) => { //Deleta uma TAsk pelo ID
   const { id } = req.body;

   const deletedTask = taskModel.deleteTaskId(id);
   console.log(deletedTask);

   if (!deletedTask) {
        res.status(404).render("delete", {task : 'A Task não encontrada!'});
    }

   res.status(200).render("delete", {deletedTask});
}



const editTask = (req, res) => { //Edita uma Task pelo ID
   const editedTask = taskModel.editTask(req.query);

   if (!task) {
        res.status(404).render("editedTask", {task : 'A Task não encontrada!'});
    }

   res.status(201).render("editedTask", {editedTask});
};



//====EXPORT====
module.exports = {
   getAllTasks ,
   getTaskId,
   getTaskCompleted,
   deleteTaskId,
   createTaskMenu,
   createTask,
   editTask
};
 