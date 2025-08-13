// Exercise 1
// Napisz kod, który oblicza sumę wszystkich liczb parzystych od 1 do 100 (włącznie) korzystając z pętli for. Po obliczeniu sumy, wyświetl wynik w konsoli.

let sum = 0;

for (let i = 1; i <= 100; i++) {
	if (i % 2 === 0) {
		sum += i;
	}
}
console.log(sum);

// Exercise 2
// Napisz kod, który generuje i wyświetla w konsoli trójkąt prostokątny o wysokości "h" składający się z gwiazdek (*). Użyj pętli for do iteracji po kolejnych poziomach trójkąta, a następnie pętli for do generowania odpowiedniej liczby gwiazdek w każdym poziomie (wydrukuj w konsoli). Przyjmij wartość h równą 6.

// Taki efekt chcemy uzyskać:

// *

// **

// ***

// ****

// *****

// ******

const h = 6;

for (let i = 1; i <= h; i++) {
	let stars = '';

	for (let j = 1; j <= i; j++) {
		stars += '*';
	}

	console.log(stars);
}

// Exercise 3
// Napisz kod, który oblicza ilość liczb podzielnych przez 3 (nie zwracają reszty) w zakresie od 1 do 50 (włącznie) korzystając z pętli while. Po obliczeniu ilości liczb, wyświetl wynik w konsoli.

let num = 1;
let counter = 0;
while (num <= 50) {
	if (!(num % 3)) {
		counter++;
	}
	num++;
}
console.log(counter);
