const div = document.querySelector('div');
let divX = 150;
let divY = 50;
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let drawActive = false;
let insertDivX;
let insertDivY;

div.addEventListener('mousedown', e => {
	drawActive = !drawActive;
	div.style.backgroundColor = 'gray';
	insertDivX = e.offsetX;
	insertDivY = e.offsetY;
});

div.addEventListener('mousemove', e => {
	if (drawActive) {
		divX = e.clientX - insertDivX; //jak nie odejmiemy tych wartości, to div zacznie nam się rysować w górnym lewym rogu
		divY = e.clientY - insertDivY;
		div.style.left = `${divX}px`;
		div.style.top = `${divY}px`;
	}
});

div.addEventListener('mouseup', () => {
	drawActive = !drawActive;
	div.style.backgroundColor = 'black';
});
