//1. Napisz funkcję która zwraca sumę wszystkich liczb zawartych w tablicy z wykorzystaniem metody forEach

const arr = [4, 3, 645];
// const addNumbersFromArray = (numbers = []) => {
// 	let sum = 0;
// 	numbers.forEach(num => (sum += num));
// 	return sum;
// };

//forEach nie generuje nowej tablicy

//2. Napisz funkcję która zwraca sumę wszystkich liczb zawartych w tablicy z wykorzystaniem metody reduce

// const addNumbersFromArray = (numbers = []) => {
// 	let sum = 0;
// 	numbers.map(num => (sum += num));
// 	return sum;
// };

const addNumbersFromArray = (numbers = []) => {
	return numbers.reduce((acc, curr) => acc + curr);
};

console.log(addNumbersFromArray(arr));
