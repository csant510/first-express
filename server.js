//load express module
const express = require('express');
const path = require('path')

//create out express app
const app = express();
 // Configure the app (app.set)
     app.set('view engine', 'ejs');
     app.set('views',path.join(__dirname, 'views'))
 	
 // Mount middleware (app.use)
 	
 	
 // Mount routes

 // Define a "root" route directly on app
 app.get('/', function (req, res) {
    res.send('<h1>Hello Express!</h1>');
  });

  app.get('/home',function(req, res){
      res.render('home',{cohort:'sei'});
  });


// Tell the app to listen on port 3000
 // for HTTP requests from clients
 app.listen(3000, function () {
    console.log('Listening on port 3000');
  });