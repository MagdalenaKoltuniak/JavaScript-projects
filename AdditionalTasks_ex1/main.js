//1. Napisz funkcję która zwraca sumę wszystkich liczb zawartych w tablicy z wykorzystaniem metody map

const arr = [4, 3, 645];
const addNumbersFromArray = (numbers = []) => {
	let sum = 0;
	numbers.map(num => (sum += num));
	return sum;
};
addNumbersFromArray(arr);

//1b. Napisz drugą wersję tej funkcji z wykorzystaniem pętli for of

const addNumbersFromArrayLoop = numbers => {
	let sum = 0;
	for (const num of numbers) {
		sum += num;
	}
	return sum;
};
addNumbersFromArrayLoop(arr);

//2. Napisz funkcję która zwraca sumę wartości z przedziału dwóch liczb wprowadzonych do funkcji

// wersja 1
// function addScope(a, b) {
// 	let sum = 0;
// 	for (let i = a; i <= b; i++) {
// 		sum += i;
// 	}
// 	return sum;
// }

// wersja 2
function addScope(a, b) {
	let sum = 0;
	for (; a <= b; a++) {
		sum += a;
	}
	return sum;
}

addScope(4, 6);
