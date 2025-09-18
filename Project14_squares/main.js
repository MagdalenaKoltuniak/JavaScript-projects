function howManySquares(a, b) {
	let min = a < b ? a : b;
	let sum = 0;
	for (let i = 0; i < min; i++) {
		let result = (a - i) * (b - i);
		console.log(`Kwadratów ${i + 1}x${i + 1} jest ${result}`);
		sum += result;
	}
	console.log(`Razem mamy ${sum} kwadratów.`);
	return sum;
}

howManySquares(6, 4);
