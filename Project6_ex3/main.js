const btn = document.querySelector('button');
const div = document.querySelector('div');
const childNames = [];

const addName = e => {
	e.preventDefault();
	const input = document.querySelector('input');
	const newName = input.value;
	if (input.value.length) {
		for (const childName of childNames) {
			if (childName === newName) {
				alert('to imię już jest!');
				input.value = '';
				return;
			}
		}
		childNames.push(newName);
		div.textContent += `${newName}, `;
		input.value = '';
	}
};

btn.addEventListener('click', addName);
