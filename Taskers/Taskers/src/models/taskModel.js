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



 //GetTasTitle => Busca pelo o title
 const getTaskTitle = (title) => {
   let Result = [];
   tasks.forEach(t => {
      if (t.title.includes(title)){
         Result.push(t);
      }
   });

   return(Result);
 };



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
   tasks = []
}



 //DeleteTaskID => Deleta uma Task pelo ID
const deleteTaskId = (id) => {
   const Indice = tasks.findIndex(task => task.id == id);

   tasks.splice(Indice, 1)[0];
}



const CompletTask = (id) => {
   const Indice = tasks.findIndex(task => task.id == id);
   const task = tasks[Indice];

   if (task.completed == 0){
      tasks[Indice].completed = 1
   } else {
      tasks[Indice].completed = 0
   }
}




//EditTask => Modifica uma Task
const editTask = (Task) => {
   const id = parseInt(Task.id);

   const TaskData = tasks.find(task => task.id == id);
   const Indice = tasks.indexOf(TaskData);

   const EditedTask = {
    id: TaskData.id,
    title: Task.title || TaskData.title,
    completed: Task.completed || false
   };

   tasks[Indice] = EditedTask;
   return(EditedTask);
}

const ChangeTitle = (id, NewTitle) => {
   const Indice = tasks.findIndex(task => task.id == id);

   tasks[Indice].title = NewTitle;
}

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