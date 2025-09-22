class NumberAdd {
	constructor(selector, startNumber, step) {
		this.btn = document.querySelector(selector);
		this.number = startNumber;
		this.step = step;
		this.btn.addEventListener('click', this.addElement.bind(this));
	}
	addElement = () => {
		const div = document.createElement('div');
		div.textContent = this.number;
		if (!(this.number % 5)) {
			div.classList.add('circle');
		}
		document.body.appendChild(div);
		this.number += this.step;
	};
}

const numberAdd = new NumberAdd('button', 1, 1);
