// Tak jak poniżej możemy robić, gdy nie mamy atrybutu data-key - jesteśmy zależni od elementów nadrzędnych parentNode
// const removeTask = e => {
// 	// console.log(e.target.parentNode);
// 	// e.target.parentNode.remove();
// 	e.target.parentNode.style.textDecoration = 'line-through';
// 	e.target.remove();
// };
// document.querySelectorAll('li button').forEach(item => item.addEventListener('click', removeTask));

// Teraz chcemy, żeby wykrywanie tego co kliknęliśmy i chcemy usunąć, chcemy żeby było niezależne od miejsca w układzie DOM:

const removeTask = e => {
	const index = e.target.dataset.key;
	console.log(index);
	document.querySelector(`li[data-key='${index}']`).remove(); // atrybutów szukamy za pomocą nawiasów kwadratowych - czyli szukamy elementu listy, który ma taki atrybut
};

document.querySelectorAll('button[data-key]').forEach(item => item.addEventListener('click', removeTask));
