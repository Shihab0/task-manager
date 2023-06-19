const taskTitleInput = document.getElementById("taskTitle");
const taskDescriptionInput = document.getElementById("taskDescription");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Event listener for adding a task
addTaskBtn.addEventListener("click", () => {
  const taskTitle = taskTitleInput.value.trim();
  const taskDescription = taskDescriptionInput.value.trim();

  if (taskTitle !== "") {
    addTask(taskTitle, taskDescription);
    taskTitleInput.value = "";
    taskDescriptionInput.value = "";
  }
});

// Event listener for deleting a task
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const taskItem = e.target.closest(".task-item");
    taskItem.remove();
  }
});

// Function to add a task to the task list
function addTask(title, description) {
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");
  taskItem.innerHTML = `
    <div class="task-content">
      <h3 class="task-title">${title}</h3>
      <p class="task-description">${description}</p>
    </div>
    <div class="task-actions">
      <button class="delete-btn">Delete</button>
    </div>
  `;

  taskList.appendChild(taskItem);
}
