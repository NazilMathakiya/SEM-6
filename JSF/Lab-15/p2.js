// Write an Express.js program to create and fetch student records from MongoDB.(B)
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
    .then(() => console.log("MongoDB Connected"));

// Schema
const Student = mongoose.model("Student", {
    name: String,
    age: Number,
    course: String
});

// POST - Add student
app.post("/students", async (req, res) => {
    const student = await Student.create(req.body);
    res.json(student);
});

// GET - Fetch students
app.get("/students", async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

app.listen(3000, () => console.log("Server running on port 3000"));