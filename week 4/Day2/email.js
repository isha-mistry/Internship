const express = require('express');
const app = express()
let PORT = 5000;

const sendMail =  require('./controllers/sendMail');

app.get("/", (req, res) => {
    res.send("I am server");
});

app.get("/mail", sendMail);

const start = async() => {
    try{
        app.listen(PORT, () => {
            console.log(`I am live on port ${PORT}`);
        });
    } catch(error){}
};

start();