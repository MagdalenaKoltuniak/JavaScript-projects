export class Statistics {
	constructor() {
		this.gameResults = [];
	}

	addGameToStatistics(win, bid) {
		let gameResult = {
			win,
			bid,
		};

		return this.gameResults.push(gameResult);
	}

	showGameStatistics() {
		let games = this.gameResults.length;
		let wins = this.gameResults.filter(game => game.win).length;
		let losses = this.gameResults.filter(game => !game.win).length;

		return [games, wins, losses];
	}
}
