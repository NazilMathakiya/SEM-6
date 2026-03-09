// Write a program to define a Student schema with properties like name, age,  and coourse using Mongoose.(A)
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

/* ------------ Student Schema ------------ */
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});

/* ------------ Student Model ------------ */
const Student = mongoose.model("Student", studentSchema);

console.log("Student Schema Created");

app.listen(3000, () => {
    console.log("Server running on port 3000");
});