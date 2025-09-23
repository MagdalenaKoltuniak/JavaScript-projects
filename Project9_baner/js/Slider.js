import { Slide } from './Slide.js';

// The Slider class handles slider logic, such as changing slides, changing dots (indicating the currently displayed slide), and responding to arrow key presses.
export class Slider {
	constructor(slideList, imageSelector, titleSelector, dotsSelector, time = 3000, active = 0) {
		this.image = document.querySelector(imageSelector);
		this.title = document.querySelector(titleSelector);
		this.dots = [...document.querySelectorAll(dotsSelector)];
		this.time = time;
		this.active = active;
		this.slides = [];
		this.indexInterval = null;

		for (const slide of slideList) {
			this.addSlide(new Slide(slide.img, slide.text));
		}
		console.log(this.slides);

		window.addEventListener('keydown', e => this.keyChangeSlide(e));
	}

	addSlide(slide) {
		this.slides.push(slide);
	}

	start() {
		this.indexInterval = setInterval(() => this.changeSlide(), this.time);
	}

	changeDot() {
		const activeDot = this.dots.findIndex(dot => dot.classList.contains('active'));
		this.dots[activeDot].classList.remove('active');
		this.dots[this.active].classList.add('active');
	}

	changeSlide() {
		this.active++;
		if (this.active === this.slides.length) {
			this.active = 0;
		}
		this.image.src = this.slides[this.active].img;
		this.title.textContent = this.slides[this.active].text;
		this.changeDot();
	}

	keyChangeSlide(e) {
		if (e.keyCode === 39 || e.keyCode === 37) {
			clearInterval(this.indexInterval);
			e.keyCode === 39 ? this.active++ : this.active--;
			if (this.active === this.slides.length) {
				this.active = 0;
			} else if (this.active < 0) {
				this.active = this.slides.length - 1;
			}
		}
		this.image.src = this.slides[this.active].img;
		this.title.textContent = this.slides[this.active].text;
		this.changeDot();
		this.start();
	}
}
