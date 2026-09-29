 //====MAIN SV CONTROLLER====
 //VARIAVEIS
 const app = require('./src/app');
 const PORT = process.env.PORT || 3000;
 


 //FLUXO
 app.listen(PORT, () => {
  console.log(`Servidor em http://localhost:3000/`);
 });
