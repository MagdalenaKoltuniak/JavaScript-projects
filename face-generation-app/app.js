const form = document.querySelector('#form');

const getFace = async e => {
	e.preventDefault();
	const gender = document.querySelector('#gender').value;
	const ethnicity = document.querySelector('#ethnicity').value;
	const age = document.querySelector('#age').value;

	const url = `https://face-studio.p.rapidapi.com/generate?gender=${gender}&age=${age}&ethnicity=${ethnicity}`;
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': '8e1284292fmsh710538bdfe300dfp1bbf24jsn7bfdbd9859f0',
			'x-rapidapi-host': 'face-studio.p.rapidapi.com',
		},
	};

	try {
		const response = await fetch(url, options);
		const result = await response.blob();
		const image = URL.createObjectURL(result);
		const imageDOM = document.createElement('img');
		const parDOM = document.createElement('p');
		parDOM.textContent = url;
		imageDOM.src = image;
		document.body.appendChild(parDOM);
		document.body.appendChild(imageDOM);
	} catch (error) {
		console.error(error);
	}
};

form.addEventListener('submit', getFace);
