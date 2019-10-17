const mysql = require('mysql');

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  
  password: "",
});

// console.log(con);

con.connect(function(err) {
    console.log(234);
  if (err) throw err;
  console.log("Connected!");
  /*Create a database named "mydb":*/
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
