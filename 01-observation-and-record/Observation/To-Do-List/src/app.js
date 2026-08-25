const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

addBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    // Create a new list item
    const li = document.createElement("li");

    const taskName = document.createElement("span");
    taskName.textContent = taskText;

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    completeBtn.addEventListener("click", function () {
        taskName.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        li.remove();

        if (taskList.children.length === 0) {
            emptyMessage.style.display = "block";
        }
    });

    li.appendChild(taskName);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    emptyMessage.style.display = "none";

    taskInput.value = "";
});