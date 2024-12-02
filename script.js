function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText === '') {
      alert('Por favor, insira uma tarefa.');
      return;
  }

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');

  li.innerHTML = `
      <span class="task-text" onclick="toggleComplete(this)">${taskText}</span>
      <div class="task-buttons">
          <button class="edit" onclick="editTask(this)">✏️</button>
          <button class="delete" onclick="deleteTask(this)">❌</button>
      </div>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
}

function toggleComplete(taskTextElement) {
  const li = taskTextElement.parentElement;
  li.classList.toggle('completed');
}

function editTask(button) {
  const li = button.parentElement.parentElement;
  const taskText = li.querySelector('.task-text');
  const newDescription = prompt('Editar tarefa:', taskText.textContent);

  if (newDescription !== null && newDescription.trim() !== '') {
      taskText.textContent = newDescription.trim();
  }
}

function deleteTask(button) {
  const li = button.parentElement.parentElement;
  li.remove();
}

