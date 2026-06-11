const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

addBtn.addEventListener("click", addTask);

function addTask()
{
    const taskText = taskInput.value.trim();

    if(taskText === "")
    {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    taskSpan.addEventListener("click", function()
    {
        taskSpan.classList.toggle("completed");
        updateStats();
    });

    deleteBtn.addEventListener("click", function()
    {
        li.remove();
        updateStats();
    });

    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";

    updateStats();
}

function updateStats()
{
    const allTasks = document.querySelectorAll("#taskList li");
    const completed = document.querySelectorAll(".completed");

    totalTasks.textContent = allTasks.length;
    completedTasks.textContent = completed.length;
}
taskInput.addEventListener("keypress", function(event)
{
    if(event.key === "Enter")
    {
        addTask();
    }
});
