// mamy wyświetlić - zbudować funkcję, która będzie wyświetlała czy dany użytkownik może kupić już piwo

const user = (name = '', age) => {
	let userName = name;
	let userAge = age;

	function showName() {
		console.log(`Cześć ${userName}, ${userAge >= 18 ? 'możesz kupić piwo.' : 'nie możesz kupić piwa.'}`);
	}

	return showName;
};

const maciek = user('Maciek', 20);
const ania = user('Ania', 16);
maciek();
ania();

const noName = user();
noName();
