const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter filename: ", (filename) => {
    rl.question("Enter content: ", (content) => {

        // Create and write the file
        fs.writeFileSync(filename, content);
        console.log("\nFile created and data written successfully.");

        // Read the file
        let data = fs.readFileSync(filename, "utf8");
        console.log("\nFile Content:");
        console.log(data);

        // Append additional content
        fs.appendFileSync(filename, "\nThis is additional content.");
        console.log("\nData appended successfully.");

        // Read the updated file
        data = fs.readFileSync(filename, "utf8");
        console.log("\nFinal File Content:");
        console.log(data);

        rl.close();
    });
});