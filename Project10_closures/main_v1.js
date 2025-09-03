// function x() {
//  let number = 0;
//  let letter = 'a';
//  function y() {
//   console.log(number);
//  }
//  return y //zwracamy funkcję y, a nie ją wywołujemy
// }

// const example = x(); //tutaj do zmiennej example przypisujemy funkcję y

// example()

// Closure (domknięcie) to mechanizm, który pomaga nam uzyskać dostęp do danej wartości poza funkcją i gdy ta funkcja nie jest już aktywna. => powyżej example() jest poza funkcją x i ta funkcja x już nie jest aktywna

// Closure - zmienna (u nas w przykładzie zmienna number) istnieje w innej funkcji, mimo, że funkcja, w której była stworzona, ta zmienna nie jest już aktywna. (zmienna letter nie jest użyta w funkcji y, więc zmienna letter przestała istnieć, już nie istnieje w pamięci)

//W pamieci programu zmienna istnieje jeśli prowadzi do niej referencja z innej funkcji (u nas w przykładzie referencja prowadzi do zmiennej number). Mozemy mieć do niej dostęp, ale także ją zmieniać.

const add = (start = 0) => {
	let number = start;
	return () => {
		number++;
		document.body.textContent = `aktualny stan licznika kliknięć to ${number}`;
	};
};

const counter = add();
// const counterFrom5 = add(5);
document.addEventListener('click', counter);
