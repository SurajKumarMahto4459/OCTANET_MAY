document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskClick);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const listItem = document.createElement('li');
        listItem.className = 'task-item';
        listItem.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="complete-btn">✔</button>
                <button class="delete-btn">✖</button>
            </div>
        `;

        taskList.appendChild(listItem);
        taskInput.value = '';
    }

    function handleTaskClick(e) {
        if (e.target.classList.contains('complete-btn')) {
            const taskItem = e.target.closest('.task-item');
            taskItem.classList.toggle('completed');
        } else if (e.target.classList.contains('delete-btn')) {
            const taskItem = e.target.closest('.task-item');
            taskItem.remove();
        }
    }
});
