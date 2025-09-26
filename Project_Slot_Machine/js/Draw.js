export class Draw {
	#result;

	constructor() {
		this.options = ['red', 'green', 'blue'];
		this.#result = this.drawResult();
	}

	getDrawResult() {
		return this.#result;
	}

	drawResult() {
		let colors = [];
		for (let i = 0; i < this.options.length; i++) {
			const index = Math.floor(Math.random() * this.options.length);
			const color = this.options[index];
			colors.push(color);
		}
		return colors;
	}
}
