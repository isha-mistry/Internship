var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "internship_database"
});


/* INSERT */

// con.connect(function(err){
//     if (err) throw err;
//     console.log("connected");
//     var sql = "INSERT INTO customers(name, address) VALUES ('Isha', 'b-5 shantinath')";
//     con.query(sql, function(err, result){
//         if(err) throw err;
//         console.log("record inserted");
//     });
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO customers (name, address) VALUES ?";
//     var values = [
//       ['Susan', 'One way 98'],
//       ['Richard', 'Sky st 331'],
//       ['Ben', 'Park Lane 38'],
//       ['Vicky', 'Yellow Garden 2'],
//       ['William', 'Central st 954'],
//       ['Chuck', 'Main Road 989'],
//       ['Viola', 'Sideway 1633'],
//       ['John', 'Highway 71'],
//       ['Peter', 'Low street 4'],
//     ];
//     con.query(sql, [values], function (err, result) {
//       if (err) throw err;
//       console.log("Number of records inserted: " + result.affectedRows);
//     });
// });




/* SELECT */

// con.connect(function(err){
//     if(err) throw err;
//     con.query("SELECT name, address FROM customers", function(err, result, fields){
//         if(err) throw err;
//         console.log(result);
//         console.log(fields);
//     });
// });



/* SELECT */
// con.connect(function(err){
//     if(err) throw err;
    
    // var sql = "SELECT * FROM customers WHERE address='One way 98'"
    // var sql = "SELECT * FROM customers WHERE address LIKE 'O%'"
    // var adr = 'Sky st 331';
    // var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
    // con.query(sql, function(err, result, fields){

    // var name = 'Susan';
    // var adr = 'One way 98';
    // var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
    // con.query(sql, [name, adr], function(err, result, fields){

    // var sql = "SELECT * FROM customers ORDER BY name"
    // var sql = "SELECT * FROM customers ORDER BY name DESC"
    
//        con.query(sql, function (err, result) {
//         if(err) throw err;
//         console.log(result);
//         // console.log(fields);
//     });
// });



/* DELETE */

// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "DELETE FROM customers WHERE address = 'Park Lane 38'";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Number of records deleted: " + result.affectedRows);
//     });
//   });



/* DROP TABLE */

// con.connect(function(err){
//     if(err) throw err;
//     var sql= "DROP TABLE employee";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table deleted");
//       });
// });



/* UPDATE */

// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "UPDATE customers SET address = 'GREEN Garden 2' WHERE address = 'Yellow Garden 2'";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result.affectedRows + " record(s) updated");
//     });
//   });




/* LIMIT */

// con.connect(function(err) {
//     if (err) throw err;
//     // var sql = "SELECT * FROM customers LIMIT 5";
//     var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });



/* USER TABLE */

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO users(name, favourite_product) VALUES ?";
//     var values = [
//         ['Susan', 145],
//         ['Richard', 150],
//         ['Ben', 170],
//         ['Vicky', 150],
//         ['William', 148],
        
//     ];
//     con.query(sql, [values], function (err, result) {
//         if (err) throw err;
//         console.log("Number of records inserted: " + result.affectedRows);
//     });
// });



/* PRODUCT TABLE */

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO product(id, name) VALUES ?";
    var values = [
        [145, 'Chocolate'],
        [150, 'Vanilla'],
        [170, 'Strawberry'],
        [148, 'Butterscotch'],
        
    ];
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});


