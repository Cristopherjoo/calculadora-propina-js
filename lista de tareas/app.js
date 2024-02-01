function addTask() {
    const taskText = document.getElementById('newTask').value;
    const selectedDay = document.getElementById('day').value;

    if (taskText.trim() === '') {
        alert('Por favor, ingresa una tarea válida.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');    
    
    const daySpan = selectedDay ? `<span>${selectedDay}</span>` : '';

    li.innerHTML = `
        <span>${taskText}</span>
        ${daySpan}
        <div>
            <button onclick="toggleTask(this)">Hecho</button>
            <button onclick="removeTask(this)">Eliminar</button>
        </div>
    `;

    taskList.appendChild(li);
    saveTasks();  
    document.getElementById('newTask').value = '';  
}

document.addEventListener('DOMContentLoaded', function () {  
    loadTasks();

    
    const addButton = document.getElementById('addTaskButton');
    addButton.addEventListener('click', addTask);
});

function toggleTask(button) {
    const li = button.closest('li');
    li.classList.toggle('done');
    saveTasks();  
}

function removeTask(button) {
    const li = button.closest('li');
    li.remove();
    saveTasks();  
}

function saveTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = [];

    
    taskList.querySelectorAll('li').forEach(function (li) {
        const taskText = li.querySelector('span').innerText;
        const isDone = li.classList.contains('done');
        tasks.push({ text: taskText, done: isDone });
    });   
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

     tasks.forEach(function (task) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button onclick="toggleTask(this)" ${task.done ? 'disabled' : ''}>Hecho</button>
                <button onclick="removeTask(this)">Eliminar</button>
            </div>
        `;

        if (task.done) {
            li.classList.add('done');
        }
        taskList.appendChild(li);
    });
}
