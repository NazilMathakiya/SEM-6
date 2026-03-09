// Write an Express.js program to create POST and PUT APIs to handle student data stored in an array.(B)
const express = require("express");
const app = express();

app.use(express.json());

let students = [];

// POST - Add student
app.post("/students", (req, res) => {
    students.push(req.body);
    res.json({ message: "Student added", students });
});

// PUT - Update student by id
app.put("/students/:id", (req, res) => {
    
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.json({ message: "Student not found" });
    }

    student.name = req.body.name || student.name;
    student.age = req.body.age || student.age;

    res.json({ message: "Student updated", students });
});

app.listen(3000, () => console.log("Server running on port 3000"));