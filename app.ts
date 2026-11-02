let tasks: string[] = [];

const input = document.getElementById("todo-input") as HTMLInputElement;
const addButton = document.getElementById("add-button") as HTMLButtonElement;
const taskList = document.getElementById("todo-list") as HTMLUListElement;

function addTask(): void {
    const task = input.value.trim();
    if (task === "") return;

    tasks.push(task);
    input.value = "";
    renderTasks();
}

function renderTasks(): void {
    taskList.innerHTML = "";

    for (const task of tasks) {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    }
}

addButton.addEventListener("click", addTask);