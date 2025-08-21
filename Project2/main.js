const div = document.createElement('div');
document.body.appendChild(div);
document.body.style.height = '10000px';

let grow = true;
let size = 100;

div.style.position = 'fixed';
div.style.top = 0;
div.style.left = 0;
div.style.height = size + 'px';
div.style.width = '100vw';
div.style.backgroundColor = 'green';

const changeHeight = () => {
	if (size >= window.innerHeight / 2) {
		grow = !grow;
		div.style.backgroundColor = 'red';
	} else if (size === 0) {
		grow = !grow;
		div.style.backgroundColor = 'green';
	}

	if (grow) {
		size += 10;
	} else {
		size -= 10;
	}
	div.style.height = size + 'px';
};

window.addEventListener('scroll', changeHeight);
