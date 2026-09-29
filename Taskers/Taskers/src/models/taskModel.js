//====MODELS / BDD====
//BDD
let tasks = [
 { id: 1, title: 'Estudar WEB', completed: 0},
 { id: 2, title: 'Revisar PBC', completed: 1},
 { id: 3, title: 'Estudar BD', completed: 0},
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
   createTask,
   editTask
}