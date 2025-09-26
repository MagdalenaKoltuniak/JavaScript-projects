export class Wallet {
	#money;
	constructor(money = 100) {
		this.#money = money;
	}

	getWalletValue() {
		return this.#money;
	}

	checkCanPlay(value) {
		if (this.#money >= value) return true;
		return false;
	}

	changeWallet(value, type = '+') {
		if (typeof value === 'number' && !isNaN(value)) {
			if (type === '+') {
				return (this.#money += value);
			} else if (type === '-') {
				return (this.#money -= value);
			} else {
				throw new Error('nieprawidłowy typ działania');
			}
		} else {
			console.log(typeof value);
			throw new Error('nieprawidłowa liczba');
		}
	}
}
