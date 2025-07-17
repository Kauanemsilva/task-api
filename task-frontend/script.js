const API_URL = 'https://task-api-kauane-fkbtfyd2b5dmbhcx.brazilsouth-01.azurewebsites.net/tasks';

document.addEventListener('DOMContentLoaded', loadTasks);

document.getElementById('taskForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title })
  });

  if (res.ok) {
    loadTasks();
    document.getElementById('title').value = '';
  } else {
    alert('Erro ao adicionar tarefa');
  }
});

async function loadTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();

  const list = document.getElementById('taskList');
  list.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.title;
    list.appendChild(li);
  });
}
