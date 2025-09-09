const form = document.querySelector('form');
const inputAddTask = document.querySelector('#add');
const ul = document.querySelector('ul');
const countTasks = document.querySelector('h1 span');
const inputSearchTask = document.querySelector('#search');

let todoList = [];

const renderList = () => {
	ul.textContent = '';
	todoList.forEach((todo, key) => {
		todo.dataset.key = key;
		ul.appendChild(todo);
	});
};

const removeTask = e => {
	const index = e.target.parentNode.dataset.key;
	todoList.splice(index, 1);
	countTasks.textContent = todoList.length;
	renderList();
};

const addTask = e => {
	e.preventDefault();
	const userTask = inputAddTask.value;
	if (!userTask) return;
	inputAddTask.value = '';

	const task = document.createElement('li');
	task.textContent = userTask;
	const delBtn = document.createElement('button');
	delBtn.textContent = 'Usuń';
	task.appendChild(delBtn);

	todoList.push(task);
	renderList();

	countTasks.textContent = todoList.length;
	task.querySelector('button').addEventListener('click', removeTask);
};

const searchTask = e => {
	const searchText = e.target.value.toLowerCase();
	let tempTodoList = [...todoList];
	if (!searchText) renderList();
	tempTodoList = tempTodoList.filter(todo => todo.textContent.toLowerCase().includes(searchText));
	ul.textContent = '';
	tempTodoList.forEach(task => {
		ul.appendChild(task);
	});
};

form.addEventListener('submit', addTask);
inputSearchTask.addEventListener('input', searchTask);
