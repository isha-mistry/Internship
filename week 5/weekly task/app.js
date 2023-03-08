var express = require('express')
var app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", function(req, res){
    // res.send("Hello");
    res.render("list")
})

app.listen(3001, function(){
    console.log("listening on port 3001")
})