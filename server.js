//load express module
const express = require('express');
const path = require('path')

 // require the todo "database"
 const todoDb = require('./data/todo-db');

//create out express app
const app = express();
 // Configure the app (app.set)
     app.set('view engine', 'ejs');
     app.set('views',path.join(__dirname, 'views'))
 	
 // Mount middleware (app.use)
 	
 	
 // Mount routes

 // Define a "root" route directly on app
 app.get('/', function (req, res) {
    res.redirect('/home')
  });

  app.get('/home',function(req, res){
      res.render('home',{cohort:'sei'});
  });

  app.get('/todos', function(req,res){
      res.render('todos/index',{
          todos: todoDb.getAll()
      });
  });


// Tell the app to listen on port 3000
 // for HTTP requests from clients
 app.listen(3000, function () {
    console.log('Listening on port 3000');
  });