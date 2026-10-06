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
   const tasks = taskModel.getCompletedOrNot(1);
   console.log(tasks);


   res.status(200).render("Tasks", {tasks});
};

const getTaskNotCompleted = (req, res) => { //Lista tds as Tasks completas
   const tasks = taskModel.getCompletedOrNot(0);
   console.log(tasks);


   res.status(200).render("Tasks", {tasks});
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

const ClearAllTasks = (req, res) => {
   taskModel.clearAllTasks();
   const tasks = taskModel.getAllTasks();


   res.status(201).render("Tasks", {tasks}); 
}

const DeleteTaskId = (req, res) => { //Deleta uma TAsk pelo ID
   const {id} = req.body;

   taskModel.deleteTaskId(id);
   const tasks = taskModel.getAllTasks();


   res.status(201).render("Tasks", {tasks}); 
}



const editTask = (req, res) => { //Edita uma Task pelo ID
   const editedTask = taskModel.editTask(req.query);

   if (!task) {
        res.status(404).render("editedTask", {task : 'A Task não encontrada!'});
    }

   res.status(201).render("editedTask", {editedTask});
};

const CompletTask = (req, res) => { //Deleta uma TAsk pelo ID
   const id = req.query.id;

   taskModel.CompletTask(id);
   const tasks = taskModel.getAllTasks();


   res.status(201).render("Tasks", {tasks}); 
}


const OpenChangeTitle = (req, res) => {
   const id = req.query.id;

   res.status(201).render("EditTask", {id});
};

const ChangeTitle = (req, res) => { //Deleta uma TAsk pelo ID
   const id = req.query.id;
   const NewTitle = req.query.title;

   taskModel.ChangeTitle(id, NewTitle);
   const tasks = taskModel.getAllTasks();


   res.status(201).render("Tasks", {tasks}); 
}




//====EXPORT====
module.exports = {
   getTask,
   getAllTasks,
   getTaskCompleted,
   getTaskNotCompleted,

   OpenCreateTask,
   CreateTask,
   ClearAllTasks,
   DeleteTaskId,
   editTask,
   CompletTask,
   ChangeTitle,
   OpenChangeTitle
};
 