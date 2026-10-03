 //====VARIAVEIS====
 const taskModel = require('../models/taskModel');

//====FUNÇÕES====
const paginaInicial = (req, res) => {
    //res.render("home", {nome: "Moto"});

    const tasks = taskModel.getAllTasks();
    
    if (tasks.length == 0) {
        res.render("allTasks",{tasks : "Nenhuma Task foi encontrada!"});
    }

    res.status(200).render("home", {tasks});
};



//====EXPORT====
module.exports = {
   paginaInicial
};
 
 