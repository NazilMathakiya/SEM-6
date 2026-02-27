// Write a Node.js program using the os module to display system details (OS type, memory, CPU info).

const os = require('os');
console.log( os.arch());
console.log( os.freemem());
console.log( os.type());
console.log( os.cpus().length);
console.log( os.hostname());
console.log(os.totalmem())/1024/1024/1024;  