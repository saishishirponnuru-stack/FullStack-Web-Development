const express = require("express");

const app = express();
const PORT = 3000;

const students = [
    "Sai Shishir",
    "Rahul",
    "Priya",
    "Arjun",
    "Sneha"
];

app.get("/", (req, res) => {
    res.send("Welcome to the Student Server");
});

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/about", (req, res) => {
    res.send("This is a basic Express.js Student Server.");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});