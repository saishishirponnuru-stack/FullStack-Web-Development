const fs = require("fs");

const fileName = "notes.txt";

// Write data to the file
fs.writeFileSync(fileName, "Hello! This is my Node.js file handling program.\n");

console.log("File created and data written successfully.");

// Read the file
let data = fs.readFileSync(fileName, "utf8");

console.log("\nFile Content:");
console.log(data);

// Append more data
fs.appendFileSync(fileName, "I am learning file handling using the fs module.");

console.log("Data appended successfully.");

// Read the updated file
data = fs.readFileSync(fileName, "utf8");

console.log("\nUpdated File Content:");
console.log(data);