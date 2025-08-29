const hands = [...document.querySelectorAll('.select img')];
const btn = document.querySelector('button');

const gameSummary = {
	numbers: 0,
	wins: 0,
	losses: 0,
	draws: 0,
};

const game = {
	playerHand: '',
	aiHand: '',
};

const handSelection = e => {
	game.playerHand = e.target.dataset.option;
	hands.forEach(hand => (hand.style.boxShadow = ''));
	e.target.style.boxShadow = '0 0 0 4px red';
};

const aiChoice = () => {
	return hands[Math.floor(Math.random() * 3)].dataset.option;
};

const checkResult = (player, ai) => {
	if (player === ai) {
		return 'draw';
	} else if (
		(player === 'papier' && ai === 'kamień') ||
		(player === 'kamień' && ai === 'nożyczki') ||
		(player === 'nożyczki' && ai === 'papier')
	) {
		return 'win';
	} else {
		return 'loss';
	}
};

const publishResult = (player, ai, result) => {
	document.querySelector('[data-summary="your-choice"]').textContent = player;
	document.querySelector('[data-summary="ai-choice"]').textContent = ai;
	document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;
	switch (result) {
		case 'win': {
			document.querySelector('p.wins span').textContent = ++gameSummary.wins;
			document.querySelector('[data-summary="who-win"]').textContent = 'Ty wygrałeś!!';
			document.querySelector('[data-summary="who-win"]').style.color = 'green';
			break;
		}
		case 'loss': {
			document.querySelector('p.losses span').textContent = ++gameSummary.losses;
			document.querySelector('[data-summary="who-win"]').textContent = 'Komputer wygrał :(';
			document.querySelector('[data-summary="who-win"]').style.color = 'red';
			break;
		}
		case 'draw': {
			document.querySelector('p.draws span').textContent = ++gameSummary.draws;
			document.querySelector('[data-summary="who-win"]').textContent = 'Remis :\\';
			document.querySelector('[data-summary="who-win"]').style.color = 'gray';
			break;
		}
	}
};

const endGame = () => {
	document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = '';
	game.playerHand = '';
	game.aiHand = '';
};

const startGame = () => {
	if (!game.playerHand) return alert('Wybierz dłoń!!');
	game.aiHand = aiChoice();
	const gameResult = checkResult(game.playerHand, game.aiHand);
	publishResult(game.playerHand, game.aiHand, gameResult);
	endGame(game.playerHand, game.aiHand);
};

hands.forEach(hand => hand.addEventListener('click', handSelection));
btn.addEventListener('click', startGame);
