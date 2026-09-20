const message = document.getElementById("message");
const changeContent = document.getElementById("changeContent");
const changeStyle = document.getElementById("changeStyle");
const changeAttribute = document.getElementById("changeAttribute");
const link = document.getElementById("link");

changeContent.addEventListener("click", function () {
    message.textContent = "The content was changed using JavaScript DOM.";
});

changeStyle.addEventListener("click", function () {
    message.style.color = "blue";
    message.style.fontSize = "22px";
    message.style.fontWeight = "bold";
});

changeAttribute.addEventListener("click", function () {
    link.setAttribute("href", "https://www.wikipedia.org");
    link.textContent = "Visit Updated Link";
});