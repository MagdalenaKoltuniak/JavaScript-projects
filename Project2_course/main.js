const square = document.createElement('div');
document.body.appendChild(square);

let grow = true; //flaga
// console.log(grow);
let size = 10; //wielkość kwadratu

square.style.width = size + 'px';
square.style.height = size + 'px';

// mamy obiekt style w naszychh elementach HTML, w którym możemy definiować style
// powyższe style zostały dodane liniowo przez js (nie zmieniamy styli w CSS tylko nadpisujemy wartości)

//maksymalna wielkość kwadratu:
//window.innerWidth * 0.5

window.addEventListener('scroll', () => {
	if (size >= window.innerWidth / 2) {
		grow = !grow;
	} else if (size === 0) {
		grow = !grow;
	}

	if (grow) {
		size += 5;
		square.style.width = size + 'px';
		square.style.height = size + 'px';
	} else {
		size -= 5;
		square.style.width = size + 'px';
		square.style.height = size + 'px';
	}
});
