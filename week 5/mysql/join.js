var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "internship_database"
});

con.connect(function(err) {
    if (err) throw err;
    // var sql = "SELECT users.name AS user, product.name AS favourite FROM users JOIN product ON users.favourite_product = product.id";
    var sql = "SELECT users.name AS user,product.name AS favourite FROM users LEFT JOIN product ON users.favourite_product = product.id"
    // var sql = "SELECT users.name AS user,product.name AS favourite FROM users RIGHT JOIN product ON users.favourite_product = product.id"
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });
