/* function sayHello(name){
    console.log('Hello' +name);
}

console.log('Isha');
console.log(window);

console.log(module); */



/* const log = require('./logger');
log('message');
console.log(logger);
 */



/* const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj); */




/* const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log('Total Memory: ' +totalMemory);

//Template string
console.log(`Free memory: ${freeMemory}`) */




/* const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);

fs.readdir('./', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
}); */





/* const EventEmitter = require('events');
const emitter = new EventEmitter();

//register listener
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});
//Raise event
emitter.emit('messageLogged', {id: 1, url:'https://'}); */




/* const EventEmitter = require('events');

const Logger = require('./logger')
const logger = new Logger();

//register listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('message'); */



/* const http = require('http');
const server = http.createServer();

server.on('connection', (socket) =>{
    console.log('New Connection');
});

server.listen(3000);
console.log('Listening on port 3000'); */



const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello world');
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);
console.log('Listening on port 3000');