class Student {
    constructor(name, rollNo, department, cgpa) {
        this.name = name;
        this.rollNo = rollNo;
        this.department = department;
        this.cgpa = cgpa;
    }
}

const displayButton = document.getElementById("displayBtn");

displayButton.addEventListener("click", function () {

    const name = document.getElementById("name").value;
    const rollNo = document.getElementById("rollNo").value;
    const department = document.getElementById("department").value;
    const cgpa = document.getElementById("cgpa").value;

    const student = new Student(name, rollNo, department, cgpa);

    const profile = document.getElementById("profile");

    profile.innerHTML = `
        <div class="student-card">
            <h2>Student Profile</h2>
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>Roll No:</strong> ${student.rollNo}</p>
            <p><strong>Department:</strong> ${student.department}</p>
            <p><strong>CGPA:</strong> ${student.cgpa}</p>
        </div>
    `;
});