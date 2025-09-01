const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const text = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum nobis iusto adipisci consectetur. Voluptatibus asperiores sint suscipit possimus dolores quis, facilis cumque odit commodi provident nam beatae cupiditate, nulla quidem.`;

let indexText = 0;
const time = 40;

const addLetter = () => {
	spnText.textContent += text[indexText];
	indexText++;
	if (indexText === text.length) clearInterval(indexTyping);
};

const cursorAnimation = () => {
	spnCursor.classList.toggle('active');
};

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);
