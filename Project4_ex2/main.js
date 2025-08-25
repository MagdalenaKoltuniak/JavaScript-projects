const getColor = event => {
	if (!(event.clientX % 2) && !(event.clientY % 2)) {
		return 'red';
	} else if (event.clientX % 2 && event.clientY % 2) {
		return 'blue';
	} else {
		return 'green';
	}
};

document.body.addEventListener('click', e => {
	console.log(e.clientX, e.clientY);
	const color = getColor(e);
	document.body.style.backgroundColor = color;

	// if (!(x % 2) && !(y % 2)) {
	// 	document.body.style.backgroundColor = 'red';
	// } else if (x % 2 && y % 2) {
	// 	document.body.style.backgroundColor = 'blue';
	// } else {
	// 	document.body.style.backgroundColor = 'green';
	// }
});
