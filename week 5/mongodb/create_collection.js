const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/mydb',{ useNewUrlParser: true,
useUnifiedTopology: true
}).then(()=>{
    console.log("S");
}).catch((err)=>{
    console.log(err);
});