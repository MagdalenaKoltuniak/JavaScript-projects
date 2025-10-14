function saveNote() {
	const textNote = document.querySelector('.note-area').value;
	const keyNote = Date.now().toString();
	localStorage.setItem(keyNote, textNote);
	document.querySelector('.note-area').value = '';

	createNote(keyNote, textNote);
}

function createNote(keyNote, textNote) {
	const div = document.createElement('div');
	div.id = 'id' + keyNote;
	div.textContent = textNote;
	div.className = 'note';

	const deleteBtn = document.createElement('button');
	deleteBtn.textContent = 'Usuń';
	deleteBtn.className = 'btn-note-delete';
	deleteBtn.onclick = () => deleteNotes(keyNote);

	div.appendChild(deleteBtn);
	document.querySelector('.notes').appendChild(div);
}

function deleteNotes(keyNote) {
	localStorage.removeItem(keyNote);
	document.querySelector(`#id${keyNote}`).remove();
}

function init() {
	Object.keys(localStorage).forEach(noteKey => {
		const textNote = localStorage.getItem(noteKey);
		createNote(noteKey, textNote);
	});
}

init();
