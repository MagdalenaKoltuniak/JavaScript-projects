document.addEventListener('DOMContentLoaded', () => {
	const rangeInput = document.querySelector('.rangeInput');
	const sampleText = document.querySelector('.sampleText');
	const fontSelector = document.querySelector('.fontSelector');

	rangeInput.addEventListener('input', function () {
		sampleText.style.fontSize = `${this.value}px`;
	});

	fontSelector.addEventListener('change', function () {
		sampleText.style.fontFamily = this.value;
	});
});
