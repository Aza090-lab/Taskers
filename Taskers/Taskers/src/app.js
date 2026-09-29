 //====CONFIGURAÇÕES DO SV====
 //Imports & Use
 const express = require('express');
 const app = express();

 const methodOverride = require('method-override');
 app.use(methodOverride('_method'))
 
 const path = require('path');
 app.use(express.static(path.join(__dirname, 'view')));
 


 //EJS
 app.set("view engine", "ejs");
 app.set("views", __dirname + "/views");



 //Middlewares
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));



 //Routes
 const taskRoutes = require('./routes/taskRoute');
 const initialRoutes = require('./routes/initialRoute');

 app.use('/', initialRoutes); //Se usa no URL digitando...
 app.use('/tasks', taskRoutes);



 //Export
 module.exports = app;