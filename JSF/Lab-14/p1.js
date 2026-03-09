// Write an Express.js program to create a GET API that returns "Hello Express".(A)
const express = require("express");

const app = express();
const PORT = 3000;

// Create GET API
app.get("/", (req, res) => {
    res.send("Hello Express");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});