var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://root:root@localhost:27017/?authMechanism=DEFAULT&authSource=test";

MongoClient.connect("mongodb://root:root@localhost:27017/?authMechanism=DEFAULT&authSource=test", function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://root:root@localhost:27017/?authMechanism=DEFAULT&authSource=test', function(err) {
//     if(!err){
//         console.log('Successful');
//     }else{
//         console.log('Error' +err)
//     }
// })
