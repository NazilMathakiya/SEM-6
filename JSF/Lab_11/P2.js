// Write a Node.js program to create an HTTP server that displays a welcome message.\

const http = require('http');

const server = http.createServer(
    (req, res) => 
        {
            res.writeHead(200, { 'Content-Type': 'text/html' });
             res.write('<h1>Welcome to my HTTP server!</h1>');
        }
    );                                                                  


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});