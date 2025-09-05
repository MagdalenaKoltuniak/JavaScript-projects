const btnStart = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const panel = document.querySelector('.time div');

let time = 0;
let active = false;
let idI;

const timer = () => {
	if (!active) {
		active = !active;
		btnStart.textContent = 'Pauza';
		idI = setInterval(() => {
			time++;
			panel.textContent = (time / 100).toFixed(2);
		}, 10);
	} else {
		active = !active;
		btnStart.textContent = 'Start';
		clearInterval(idI);
	}
};

const reset = () => {
	time = 0;
	active = false;
	panel.textContent = '---';
	btnStart.textContent = 'Start';
	clearInterval(idI);
};

btnStart.addEventListener('click', timer);
btnReset.addEventListener('click', reset);
