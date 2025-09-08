const toDoList = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task'); //querySelectorAll pobiera listę tasków, która była dodana na początku programu (czyli pustą listę); za to metoda np. getElemenetsByClassName działa na żywo - przechowuje zawsze aktualną wartość
const input = document.querySelector('input');

const renderList = () => {
	ul.textContent = '';
	toDoList.forEach((toDoElement, key) => {
		toDoElement.dataset.key = key;
		ul.appendChild(toDoElement);
	});
};

const removeTask = e => {
	// e.target.parentNode.remove();  //ta linijka kodu nie jest już potrzebna
	const index = e.target.parentNode.dataset.key;
	toDoList.splice(index, 1);
	taskNumber.textContent = listItems.length;
	//UWAGA: usuwając 2 elementy jednocześnie (lub nawet po usunięciu 1 elementu), my sprawiamy, że te indexy w tablicach są już inne (więc jeżeli mielismy 5 elementów, a teraz mamy 4, no to ten data-key może już nie odpowiadać indexowi), dlatego przy każdym usunięciu musimy znowu wygenerować listę
	renderList();
};

const addTask = e => {
	e.preventDefault();
	const titleTask = input.value;
	if (!titleTask) return;

	const task = document.createElement('li');
	task.className = 'task';
	task.innerHTML = titleTask + '<button>Usuń</button>';

	toDoList.push(task);
	ul.textContent = '';
	toDoList.forEach((toDoElement, key) => {
		// toDoElement.id = key; //zamiast id tworzymy atrybut data-key
		toDoElement.dataset.key = key;
		ul.appendChild(toDoElement);
	});

	ul.appendChild(task);
	input.value = ''; //w taki sposób czyścimy input - nie możemy się tu odwołać do zmiennej titleTask, bo ona już zawiera wartość (ta zmienna nie ma referencji do input.value, tylko sobie skopiowała wartość)
	// const liItems = document.querySelectorAll('li.task').length;
	taskNumber.textContent = listItems.length; //jak użyliśmy metody getElementsByClassName to teraz taskNumber aktualizuje się na bieżąco - taskNumber jest HTMLCollection a nie NodeList, a HTMLCollection jest na żywo updatowane
	task.querySelector('button').addEventListener('click', removeTask);
};

form.addEventListener('submit', addTask);
