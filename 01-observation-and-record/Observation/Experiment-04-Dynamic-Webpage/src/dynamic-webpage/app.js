function changeText(){

    document.getElementById("heading").innerHTML = "JavaScript is Working!";

    document.getElementById("message").innerHTML =
    "The text has been changed using JavaScript.";
}

function changeColor(){

    let colors = ["lightblue","lightgreen","lightyellow","pink","lavender"];

    let random = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[random];
}

function showTime(){

    let now = new Date();

    document.getElementById("message").innerHTML =
    "Current Time: " + now.toLocaleTimeString();
}