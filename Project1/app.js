const btn = document.querySelector('button');
const ul = document.querySelector('ul');

let odd = 1;
const addElement = () => {
	const li = document.createElement('li');
	li.textContent = odd;
	if (!(odd % 3)) li.classList.add('big');
	ul.appendChild(li);
	odd += 2;
};

btn.addEventListener('click', addElement);
