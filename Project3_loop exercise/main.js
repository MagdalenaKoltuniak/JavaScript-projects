let size = 10;
let orderElement = 1;

const init = () => {
	const btn = document.createElement('button');
	const btnReset = document.createElement('button');
	const ul = document.createElement('ul');
	ul.style.listStyle = 'none';
	btn.textContent = 'Dodaj 10 elementów do listy';
	btnReset.textContent = 'Wyczyść';
	document.body.appendChild(btn);
	document.body.appendChild(btnReset);
	document.body.appendChild(ul);

	btn.addEventListener('click', createLiElements);
	btnReset.addEventListener('click', cleanList);
};

const createLiElements = () => {
	const ul = document.querySelector('ul');
	for (let i = 0; i < 10; i++) {
		const li = document.createElement('li');
		li.textContent = `Element nr ${orderElement++}`; //zwraca element orderElement i od razu go zwiększa
		li.style.fontSize = `${size++}px`;
		ul.appendChild(li);
	}
};

const cleanList = () => {
	document.querySelector('ul').textContent = '';
	size = 10;
	orderElement = 1;
};

init();
