// Write a Node.js program to delete a file and handle the error if the file does not exist.

const http = require('http');

const server = http.createServer(
    
    (req, res) => 
        {
            res.writeHead(200, { 'Content-Type': 'text/html' });;
        }
    );
const fs = require('fs');
const filePath = 'output.txt';
fs.unlink(filePath, (err) => {
    if (err) {
        console.error('Error deleting file:', err);
    }
    else {
        console.log('File has been deleted successfully.');
    }
});
