// Write a Node.js program to create and write content into a file.  (A)


const http = require('http');

const server = http.createServer(
    
    (req, res) => 
        {
            res.writeHead(200, { 'Content-Type': 'text/html' });;
        }
    );

    const fs = require('fs');

    const content = 'Darshan';
    fs.writeFile('output.txt', content, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        }   
        else {
            console.log('File has been written successfully.');
        }
    });
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});