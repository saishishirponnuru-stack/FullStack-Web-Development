// Student Object and JSON

let student = {
    name: "Ravi",
    rollNo: "24CSM001",
    branch: "CSM",
    cgpa: 8.5
};

console.log("Student Name:", student.name);
console.log("Roll Number:", student.rollNo);
console.log("Branch:", student.branch);
console.log("CGPA:", student.cgpa);

// Convert object to JSON

let jsonData = JSON.stringify(student);

console.log("JSON:", jsonData);

// Convert JSON back to object

let newStudent = JSON.parse(jsonData);

console.log("Name after parsing:", newStudent.name);
console.log("CGPA after parsing:", newStudent.cgpa);