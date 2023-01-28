{
    const tasks = [
        {
            content: "pierwsze zadanie",
            done: false,
        },
        {
            content: "drugie zadanie",
            done: true,
        },
    ];

    const addNewTasks = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li 
            class="tasks__item js-task"
            >

            <button class="tasks__button tasks__button--toggleDone js-toggleDone">
            ${task.done ? " &#x2714;" : " "}
            </button>
            <span class="tasks__content ${task.done ? "tasks__content--done" : ""}"> ${task.content} </span> 
            <button class="tasks__button tasks__button--remove js-remove">
            &#128465;
            </button>
            `;
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;
        bindEvents();
    };

    const onFromSubmit = (event) => {
        event.preventDefault();
        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent !== "") {
            addNewTasks(newTaskContent);
            newTaskElement.value = ""

        };

        addNewTasks(newTaskContent);
        newTaskContent.focus();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFromSubmit);
    };

    init();
}