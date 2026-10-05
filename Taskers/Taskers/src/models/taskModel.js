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
 //GetAllTasks => Pega tds tarefas
 const getAllTasks = () => tasks;



 //GetTaskID => Busca pelo ID
 const getTaskId = (id) => tasks.find(task => task.id == id);



 //GetCompleted => Pega apenas as que foram completadas
 const getCompleted = () => {
   tasks.find(item => item.completed === 1)
 };



 //GetTasTitle => Busca pelo o title
 const getTaskTitle = (title) => {
   tasks.find(item => item.title === title)
 };



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




 //DeleteTaskID => Deleta uma Task pelo ID
const deleteTaskId = (id) => {
   const Indice = tasks.findIndex(task => task.id == id);

   return tasks.splice(Indice, 1)[0];
}

//ClearAllTasks => Limpar todas as Tasks
const clearAllTasks = () => {
   return taks = 0;
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



//====EXPORT====
module.exports = {
   getAllTasks ,
   getTaskId ,
   getCompleted ,
   deleteTaskId,
   clearAllTasks,
   createTask,
   editTask,
   getTaskTitle
}