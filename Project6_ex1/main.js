const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ['Kasia', 'Ania', 'Sylwia', 'Gosia', 'Magda', 'Łucja', 'Aneta'];
const prefixs = [
	'Wydaje mi się',
	'Mam wrażenie',
	'Szczerze powiedziawszy, myślę',
	'Szczerze uważam',
	'Na 100% twierdzę',
	'Jestem pewien',
];

const nameGenerator = () => {
	const nameIndex = Math.floor(Math.random() * names.length);
	const prefixIndex = Math.floor(Math.random() * prefixs.length);

	div.textContent = `${prefixs[prefixIndex]}, że najfajniejsze imię to ${names[nameIndex]}.`;
};

btn.addEventListener('click', nameGenerator);
