const btn = document.querySelector('button');
const liItems = document.querySelectorAll('li');

let size = 10;

const showLi = () => {
	// for (let i = 0; i < liItems.length; i++) {
	// 	if (!liItems[i].style.display) {
	// 		liItems[i].style.display = 'block';
	// 	}
	// 	liItems[i].style.fontSize = size + 'px';
	// }
	liItems.forEach(liItem => {
		liItem.style.display = 'block';
		liItem.style.fontSize = `${size}px`;
	});
	size++;
};

btn.addEventListener('click', showLi);
