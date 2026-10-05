 //====VARIAVEIS====
 //const taskModel = require('../models/taskModel');

//====FUNÇÕES====
const paginaInicial = (req, res) => {
    res.render("Home", {nome: "Moto"});
};



//====EXPORT====
module.exports = {
   paginaInicial
};
 
 