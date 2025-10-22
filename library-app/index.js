class Book {
	#title;
	#author;
	#publishTear;

	constructor(title, author, publishTear) {
		this.#title = title;
		this.#author = author;
		this.#publishTear = publishTear;
	}

	showDatails() {
		return `Tytuł: ${this.#title}, Autor: ${this.#author}, Data wydania: ${this.#publishTear}`;
	}
}

class Library {
	#bookCollection;

	constructor() {
		this.#bookCollection = new Map();
		this.init();
	}

	init() {
		document.getElementById('addBook').addEventListener('click', () => this.#addBook());
		document.getElementById('searchBook').addEventListener('click', () => this.#searchBook());
	}

	#addBook() {
		const title = document.getElementById('title').value;
		const author = document.getElementById('author').value;
		const publishYear = document.getElementById('publishYear').value;

		const book = new Book(title, author, publishYear);
		this.#bookCollection.set(title, book);

		alert('Książka została dodana do kolekcji');
		console.log(this.#bookCollection);
	}

	#searchBook() {
		const title = document.getElementById('searchTitle').value;
		const resultElement = document.getElementById('searchResult');
		const book = this.#bookCollection.get(title);

		if (book) {
			resultElement.textContent = book.showDatails();
		} else {
			resultElement.textContent = 'Nie mamy takiej książki w zbiorze';
		}
	}
}

const library = new Library();
console.log(library);
