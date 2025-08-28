const input = document.getElementById('pass');
const div = document.querySelector('div');
const passwords = ['jedEN', 'DwA', 'TrzY'];
const messages = ['super', 'działa', 'tak trzymać'];

// wersja 1 - najszybsza i najbardziej poprawna
// const showMessage = e => {
// 	div.textContent = '';
// 	const text = e.target.value.toLowerCase();
// 	passwords.forEach((password, index) => {
// 		if (password.toLowerCase() === text) {
// 			div.textContent = messages[index];
// 		}
// 	});
// };

// wersja 2 - nie jest to optymalne rozwiązanie, bo mutujemy oryginalną tablicę
// passwords.forEach((password, index) => {
// 	passwords[index] = password.toLowerCase();
// });

// const showMessage = e => {
// 	div.textContent = '';
// 	const text = e.target.value.toLowerCase();
// 	passwords.forEach((password, index) => {
// 		if (password === text) {
// 			div.textContent = messages[index];
// 		}
// 	});
// };

// wersja 3 - z użyciem map() - map zwraca nową tablicę (forEach sam w sobie nic nie zwraca)

const LCPasswords = passwords.map(password => password.toLowerCase());

const showMessage = e => {
	div.textContent = '';
	const text = e.target.value.toLowerCase();

	for (let i = 0; i < LCPasswords.length; i++) {
		if (text === LCPasswords[i]) {
			div.textContent = messages[i];
		}
	}
};

input.addEventListener('input', showMessage);

input.addEventListener('focus', e => {
	e.target.classList.add('active');
});

input.addEventListener('blur', e => {
	e.target.classList.remove('active');
});
