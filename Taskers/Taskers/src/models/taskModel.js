//====MODELS / BDD====
//BDD
let tasks = [
 { id: 1, title: 'Estudar para WEB', completed: false},
 { id: 2, title: 'Fazer Lista de Exercicios de FTAF', completed: false},
 { id: 3, title: 'Estudar para BDD', completed: true},
 { id: 4, title: 'Fazer Trabalho de Artes', completed: false},
 { id: 5, title: 'Estudar para o Questionario de GEO', completed: true},
 { id: 6, title: 'Economizar VR', completed: false},
 { id: 7, title: 'Dar um ~Tiro (By: Bruno)', completed: true},
];



//====FUNÇÕES====
//Tipos de busca
 //GetAllTasks => Pega tds tarefas
 const getAllTasks = () => tasks;



 //GetTaskID => Busca pelo ID
 const getTaskId = (id) => tasks.find(task => task.id == id);


 //GetCompleted => Pega apenas as que foram completadas
 const getCompletedOrNot = (x) => {
   let Result = [];
   tasks.forEach(t => {
      if (t.completed == x){
         Result.push(t);
      }
   });

   return(Result);
 };

//gettasktitle => busca pelo titulo

 const getTaskTitle = (title) => {
   let Result = [];
   tasks.forEach(t => {
      if (t.title.toLowerCase().includes(title.toLowerCase())){
         Result.push(t);
      }
   });

   return(Result);
 };


//GetTaskTitle => Busca pelo titulo
 //const getTaskTitle = (title) => {
   ///let Result = [];
   //tasks.forEach(t => {
     // if (t.title.includes(title)){
       //  Result.push(t);
     // }
   //});

   //return(Result);
 //};



 //Criação, Modificação e Deletar
 //CreateTask => Cria uma Task
 const createTask = (taskData) => {
    const newTask = {
    id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
    title: taskData.title || 'empity',
    completed: false
    };

    tasks.push(newTask);
    return newTask;
 };



//ClearAllTasks => Limpar todas as Tasks
const clearAllTasks = () => {
   tasks.length = 0;
   return tasks;
}



 //DeleteTaskID => Deleta uma Task pelo ID
const deleteTaskId = (id) => {
   const index = tasks.findIndex(task => task.id == id);
   if (index !== -1) {
      return tasks.splice(index, 1)[0];
   }
   return null; 
}


//CompletTask => Marca uma Task como completa
const CompletTask = (id) => {
   const task = tasks.find(t => t.id == id);
   if (task) {
      task.completed = !task.completed;
      return task;
   }
   return null;
};




//EditTask => Modifica uma Task
const editTask = (Task) => {
   const id = parseInt(Task.id);

   const TaskData = tasks.find(task => task.id == id);
   
   if (!TaskData) {
      return null;
   }

   if (Task.title != undefined){
      TaskData.title = Task.title;
   }

   if (Task.completed != undefined){
      TaskData.completed = Boolean(Task.completed);
   }

   return TaskData;
};

//altera o titulo da task
const ChangeTitle = (id, NewTitle) => {
   const task = tasks.find(t => t.id == id);
   if (task) {
      task.title = NewTitle;
      return task;
   }
   return null;
};

//====EXPORT====
module.exports = {
   getAllTasks ,
   getTaskId ,
   getCompletedOrNot ,
   deleteTaskId,
   clearAllTasks,
   createTask,
   editTask,
   getTaskTitle,
   CompletTask,
   ChangeTitle
}