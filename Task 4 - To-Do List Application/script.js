const plansContainer = document.getElementById("plansContainer");
const addPlanBtn = document.getElementById("addPlanBtn");
const planInput = document.getElementById("planInput");

function createPlan(planName) {
    const planDiv = document.createElement("div");
    planDiv.className = "plan";

    planDiv.innerHTML = `
    <h2>${planName}</h2>
    <div class="task-input">
      <input type="text" placeholder="Add a task" class="taskInput"/>
      <button class="addTaskBtn">Add Task</button>
    </div>
    <ul class="taskList"></ul>
  `;

    plansContainer.appendChild(planDiv);

    const taskInput = planDiv.querySelector(".taskInput");
    const addTaskBtn = planDiv.querySelector(".addTaskBtn");
    const taskList = planDiv.querySelector(".taskList");

    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.className = "task-item";

        const span = document.createElement("span");
        span.textContent = taskText;

        const buttons = document.createElement("div");
        buttons.className = "task-buttons";

        const toggleDone = document.createElement("span");
        toggleDone.textContent = "✔";
        toggleDone.className = "done-toggle";
        toggleDone.addEventListener("click", () => {
            li.classList.toggle("done");
        });

        const deleteBtn = document.createElement("span");
        deleteBtn.textContent = "✖";
        deleteBtn.addEventListener("click", () => {
            li.remove();
        });

        buttons.appendChild(toggleDone);
        buttons.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(buttons);

        taskList.appendChild(li);
        taskInput.value = "";
    });
}

addPlanBtn.addEventListener("click", () => {
    const planName = planInput.value.trim();
    if (planName === "") return;
    createPlan(planName);
    planInput.value = "";
});
