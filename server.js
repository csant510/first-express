//load express module
const express = require('express');

//create out express app
const app = express();

 // Define a "root" route directly on app
 app.get('/', function (req, res) {
    res.send('<h1>Hello Express!</h1>');
  });

  app.get('/home',function(req, res){
      res.send('<h1>Home Page</h1>')
  })


// Tell the app to listen on port 3000
 // for HTTP requests from clients
 app.listen(3000, function () {
    console.log('Listening on port 3000');
  });