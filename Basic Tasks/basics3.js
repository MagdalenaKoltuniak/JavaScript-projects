// Exercise 1 Obliczanie średniej
// Zadeklaruj funkcję o nazwie "calculateAverage", która przyjmuje tablicę liczb jako argument i zwraca średnią arytmetyczną tych liczb. Wykorzystaj pętlę for do obliczenia sumy liczb, a następnie podziel tę sumę przez długość tablicy.

// Przykład użycia: calculateAverage([1, 2, 3, 4, 5]); // zwraca 3

const calculateAverage = numbers => {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum / numbers.length;
};

console.log(calculateAverage([1, 2, 3, 4, 5]));

// Exercise 2 Filtracja liczb parzystych
// Zadeklaruj funkcję o nazwie "filterEvenNumbers", która przyjmuje tablicę liczb jako argument i zwraca nową tablicę zawierającą tylko liczby parzyste. Wykorzystaj pętlę for do iteracji po elementach tablicy oraz instrukcje warunkowe do sprawdzenia, czy liczba jest parzysta.

// Przykład użycia: filterEvenNumbers([1, 2, 3, 4, 5, 6]); // zwraca [2, 4, 6]

function filterEvenNumbers(arr) {
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (!(arr[i] % 2)) newArr.push(arr[i]);
	}
	return newArr;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Exercise 3 Liczba wystąpień elementu w tablicy
// Stwórz funkcję "countOccurrences" za pomocą przypisania funkcji anonimowej do zmiennej, która przyjmuje dwa argumenty: tablicę "array" oraz wartość "element". Funkcja powinna zwracać liczbę wystąpień "element" w tablicy "array". Wykorzystaj pętlę for do iteracji po elementach tablicy oraz instrukcje warunkowe do sprawdzenia, czy element tablicy zgadza się z podaną wartością.

// Przykład użycia: countOccurrences(["apple", "banana", "apple", "orange", "banana"], "banana"); // zwraca 2

const countOccurrences = function (arr, el) {
	let counter = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === el) counter++;
	}
	return counter;
};

console.log(countOccurrences(['apple', 'banana', 'apple', 'orange', 'banana'], 'banana'));
