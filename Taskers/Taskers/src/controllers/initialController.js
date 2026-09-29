//====FUNÇÕES====
const paginaInicial = (req, res) => {
    res.render("home", {nome: "Moto"});
};



//====EXPORT====
module.exports = {
   paginaInicial
};
 
 