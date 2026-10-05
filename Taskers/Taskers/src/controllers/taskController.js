 //====VARIAVEIS====
 const taskModel = require('../models/taskModel');



 //====FUNÇÕES====
 //Tipos de busca
 const getTask = (req, res) => {
    const { title } = req.query;
    const tasks = taskModel.getTaskTitle(title);

    console.log(tasks)


    res.status(200).render("GetTasks", {tasks});
 }



 const getAllTasks = (req, res) => { //Lista tds as Tasks
    const tasks = taskModel.getAllTasks();


    res.status(200).render("Tasks", {tasks});
 };



const getTaskCompleted = (req, res) => { //Lista tds as Tasks completas
   const tasks = taskModel.getCompleted();

   if (tasks.length == 0) {
      res.render("allTasks",{tasks : "Nenhuma Task completa foi encontrada!"});
    }

   res.status(200).json(tasks);
};



//Criação, Modificação e Deletar
const OpenCreateTask = (req, res) => {
   res.status(201).render("CreateTask");
};

const CreateTask = (req, res) => { //Cria um nv Task
   taskModel.createTask(req.body);
   const tasks = taskModel.getAllTasks();


   res.status(201).render("Tasks", {tasks});
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
   getTask,
   getAllTasks,
   getTaskCompleted,

   OpenCreateTask,
   CreateTask,
   deleteTaskId,
   editTask
};
 