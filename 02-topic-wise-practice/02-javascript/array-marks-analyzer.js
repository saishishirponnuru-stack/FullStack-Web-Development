// Student Marks Analyzer

let marks = [85, 72, 91, 68, 88];

let total = 0;

for (let mark of marks) {
    total = total + mark;
}

let average = total / marks.length;

console.log("Marks:", marks);
console.log("Total:", total);
console.log("Average:", average);
console.log("Highest:", Math.max(...marks));
console.log("Lowest:", Math.min(...marks));

let passed = 0;

for (let mark of marks) {
    if (mark >= 40) {
        passed++;
    }
}

console.log("Students Passed:", passed);