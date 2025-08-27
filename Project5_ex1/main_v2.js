const input = document.getElementById('pass');
const div = document.querySelector('div');
const passwords = ['user', 'wiosna', 'Ania'];
const messages = ['pojechałam na zakupy', 'piękna pora roku', 'super imię'];

input.addEventListener('input', e => {
	div.textContent = '';
	const text = e.target.value;

	passwords.forEach((password, index) => {
		if (password === text) {
			div.textContent = messages[index];
			e.target.value = '';
		}
	});
});

input.addEventListener('focus', e => {
	e.target.classList.add('active');
});

input.addEventListener('blur', e => {
	e.target.classList.remove('active');
});
