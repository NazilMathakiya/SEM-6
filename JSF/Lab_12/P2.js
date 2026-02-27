//  Write a Node.js program to read a file and append new content into it. 

const http = require('http');

const server = http.createServer(
    
    (req, res) => 
        {
            res.writeHead(200, { 'Content-Type': 'text/html' });;
        }
    );

const fs = require('fs');
const newContent = '\nThis is the new content to append.';
fs.appendFile('output.txt', newContent, (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    }
    else {
        console.log('Content has been appended successfully.');
    }
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}
);