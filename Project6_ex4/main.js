const btnAdd = document.querySelector('.add');
const btnClean = document.querySelector('.clean');
const btnShowAdvice = document.querySelector('.showAdvice');
const btnShowOptions = document.querySelector('.showOptions');
const h1 = document.querySelector('h1');
const input = document.querySelector('input');
const adviceArr = [];

const addAdvice = e => {
	e.preventDefault();
	adviceArr.push(input.value);
	alert(`została dodana opcja ${input.value}`);
	input.value = '';
	console.log(adviceArr);
};

const cleanAllAdvices = e => {
	e.preventDefault();
	adviceArr.length = 0;
	h1.textContent = '';
	console.log(adviceArr);
};

const showAdvice = () => {
	const index = Math.floor(Math.random() * adviceArr.length);
	h1.textContent = adviceArr[index];
};

const showOptions = () => {
	alert(`Twoje możliwości to: ${adviceArr.join(', ')}`);
};

btnAdd.addEventListener('click', addAdvice);
btnClean.addEventListener('click', cleanAllAdvices);
btnShowAdvice.addEventListener('click', showAdvice);
btnShowOptions.addEventListener('click', showOptions);
