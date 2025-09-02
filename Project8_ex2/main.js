const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['DZIEŃ DOBRY!!!', 'FAJNIE, ŻE JESTEŚ :)', 'ZACZYNAMY...'];

let arrIndex = 0;
let strIndex = -15; //stosujemy ujemny index, żeby nie zaczynał pisać od razu

const addLetter = () => {
	if (strIndex >= 0) {
		spnText.textContent += txt[arrIndex][strIndex];
	}
	strIndex++;
	if (strIndex === txt[arrIndex].length) {
		arrIndex++;
		if (arrIndex === txt.length) return;
		//po napisaniu danego tekstu musimy teraz chwilę odczekać - dlatego stosujemy kolejny setTimeout
		return setTimeout(() => {
			strIndex = -15;
			spnText.textContent = '';
			addLetter();
		}, 2000);
	}

	setTimeout(addLetter, 100);
};

addLetter();

const cursorAnimation = () => {
	spnCursor.classList.toggle('active');
};

setInterval(cursorAnimation, 400);
