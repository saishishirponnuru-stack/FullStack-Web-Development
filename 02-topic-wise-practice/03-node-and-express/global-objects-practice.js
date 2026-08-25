// Node.js Global Objects Practice

console.log("Node.js Global Objects");

// 1. __dirname
console.log("\nCurrent Directory:");
console.log(__dirname);

// 2. __filename
console.log("\nCurrent File:");
console.log(__filename);

// 3. process
console.log("\nNode.js Version:");
console.log(process.version);

// 4. process.platform
console.log("\nOperating System:");
console.log(process.platform);

// 5. setTimeout()
setTimeout(() => {
    console.log("\nThis message is displayed after 2 seconds.");
}, 2000);

// 6. setInterval()
let count = 1;

const timer = setInterval(() => {
    console.log("Count:", count);
    count++;

    if (count > 3) {
        clearInterval(timer);
        console.log("Interval stopped.");
    }
}, 1000);