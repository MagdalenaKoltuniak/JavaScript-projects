const checkBtn = document.querySelector('.check');
const againkBtn = document.querySelector('.again');
const messageTitle = document.querySelector('.message');
let input = document.querySelector('.guess');

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = message => {
	messageTitle.textContent = message;
};

const guessNumber = () => {
	const guess = Number(input.value);

	if (!guess) {
		displayMessage('⛔️ No number!');
	} else if (guess === secretNumber) {
		displayMessage('🎉 Correct number!');
		document.querySelector('.number').textContent = secretNumber;

		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';

		if (score > highscore) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			displayMessage('💥 You lost the game!');
			document.querySelector('.score').textContent = 0;
		}
	}
};

const startAgain = () => {
	score = 20;
	secretNumber = Math.floor(Math.random() * 20) + 1;

	input.value = '';
	document.querySelector('.score').textContent = score;
	displayMessage('Start guessing...');
	document.querySelector('.number').textContent = '?';

	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
};

checkBtn.addEventListener('click', guessNumber);
againkBtn.addEventListener('click', startAgain);
