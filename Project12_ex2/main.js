//Przebudowanie oryginalnej tablicy za pomocą forEach (lepiej używać metod niemutowalnych takich jak filter i map):
// const arr = [34, 219, 109, 2849, 12, 10, 38];

// arr.forEach((number, index) => (arr[index] = number * 2));

const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li');

const searchTask = e => {
	const searchText = e.target.value.toLowerCase();
	let tasks = [...liElements];
	tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
	console.log(tasks);
	ul.textContent = '';
	tasks.forEach(task => ul.appendChild(task));
};

input.addEventListener('input', searchTask);
