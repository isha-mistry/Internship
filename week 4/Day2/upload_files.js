const express =  require('express')
const formidable = require('formidable')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/main.html')
})

app.post('/', (req, res) => {
    var form = new formidable.IncomingForm()
    form.parse(req)
    form.on('filebegin', function(name, file){
        file.path = __dirname + 'uploads' + file.name
    })
})

app.listen(5000, () => {
    console.log("app is running on port 5000")
})