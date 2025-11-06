const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addButton');
const list = document.getElementById('taskList');
const totalEl = document.getElementById('total');
const doneEl = document.getElementById('done');

let total = 0;
let done = 0;

function updateCounts() {
  totalEl.textContent = String(total);
  doneEl.textContent = String(done);
}

function addTask(text) {
  const li = document.createElement('li');
  const label = document.createElement('span');
  label.textContent = text;
  const toggle = document.createElement('button');
  toggle.textContent = 'Hecha';
  const remove = document.createElement('button');
  remove.textContent = 'Eliminar';

  toggle.addEventListener('click', () => {
    const isDone = li.classList.toggle('done');
    done += isDone ? 1 : -1;
    updateCounts();
  });

  remove.addEventListener('click', () => {
    if (li.classList.contains('done')) done--;
    total--;
    li.remove();
    updateCounts();
  });

  li.append(label, toggle, remove);
  list.appendChild(li);
  total++;
  updateCounts();
}

addBtn.addEventListener('click', () => {
  const value = input.value.trim();
  if (!value) return;
  addTask(value);
  input.value = '';
  input.focus();
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addBtn.click();
});