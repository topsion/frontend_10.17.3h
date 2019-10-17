// Require express and create an instance of it
const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

// on the request to root (localhost:3000/)
app.get('/', function (req, res) {
    res.send('<b>My</b> first express http server');
});

app.get('/id/:val', function(req, res) {
    console.log(req.params.val);
});

app.post('/create', function(req, res) {
    console.log('req', req.body.email);
});

// On localhost:3000/welcome
app.get('/welcome', function (req, res) {
    res.send('<b>Hello</b> welcome to my http server made with express');
});

app.get('/helloworld', function (req, res) {
    var mysql = require('mysql');
    
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "mydb"
    });
    
    con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM customers", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
      });
    });
});

// Change the 404 message modifing the middleware
app.get('*', function(req, res) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
}, );

// start the server in the port 3000 !
app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});