// Function to calculate the total of all marks
function calculateTotal(marks) {
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    return total;
}

// Function to calculate the average
function calculateAverage(marks) {
    let total = calculateTotal(marks);

    return total / marks.length;
}

// Function to find the highest mark
function findHighest(marks) {
    return Math.max(...marks);
}

// Function to find the lowest mark
function findLowest(marks) {
    return Math.min(...marks);
}

// Function to check whether the student passed
function checkResult(marks) {
    for (let mark of marks) {
        if (mark < 40) {
            return "Fail";
        }
    }

    return "Pass";
}

// Get the Analyze button
const analyzeButton = document.getElementById("analyzeBtn");

// Execute when the button is clicked
analyzeButton.addEventListener("click", function () {

    // Create an array containing the five marks
    const marks = [
        Number(document.getElementById("mark1").value),
        Number(document.getElementById("mark2").value),
        Number(document.getElementById("mark3").value),
        Number(document.getElementById("mark4").value),
        Number(document.getElementById("mark5").value)
    ];

    // Check whether all marks are entered
    if (marks.some(mark => isNaN(mark))) {
        document.getElementById("result").innerHTML =
            "<p>Please enter marks for all subjects.</p>";
        return;
    }

    // Call functions
    const total = calculateTotal(marks);
    const average = calculateAverage(marks);
    const highest = findHighest(marks);
    const lowest = findLowest(marks);
    const result = checkResult(marks);

    // Display the results
    document.getElementById("result").innerHTML = `
        <h2>Result</h2>

        <p><strong>Marks:</strong> ${marks.join(", ")}</p>

        <p><strong>Total:</strong> ${total}</p>

        <p><strong>Average:</strong> ${average.toFixed(2)}</p>

        <p><strong>Highest Mark:</strong> ${highest}</p>

        <p><strong>Lowest Mark:</strong> ${lowest}</p>

        <p><strong>Result:</strong> ${result}</p>
    `;
});