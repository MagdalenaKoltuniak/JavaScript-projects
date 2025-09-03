const slideList = [
	{
		img: './img/img1.jpg',
		text: 'Pierwszy tekst',
	},
	{
		img: './img/img2.jpg',
		text: 'Drugi tekst',
	},
	{
		img: './img/img3.jpg',
		text: 'Trzeci tekst',
	},
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

const time = 3000;
let active = 0;

const changeDot = () => {
	const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
	dots[activeDot].classList.remove('active');
	dots[active].classList.add('active');
};

const changeSlide = () => {
	active++;
	if (active === slideList.length) {
		active = 0;
	}
	image.src = slideList[active].img;
	h1.textContent = slideList[active].text;
	changeDot();
};

let indexInterval = setInterval(changeSlide, time);

const keyChangeSlide = e => {
	if (e.keyCode === 39 || e.keyCode === 37) {
		clearInterval(indexInterval);
		e.keyCode === 39 ? active++ : active--;
		if (active === slideList.length) {
			active = 0;
		} else if (active < 0) {
			active = slideList.length - 1;
		}
	}
	image.src = slideList[active].img;
	h1.textContent = slideList[active].text;
	changeDot();

	indexInterval = setInterval(changeSlide, time); //musimy przypisać setInterval do indexu bo jak tego nie zrobimy to będzie to zupełnie inna funkcja niż wczesniejszy setInterval i nie uda nam się go wyłączyć
};

window.addEventListener('keydown', keyChangeSlide);
