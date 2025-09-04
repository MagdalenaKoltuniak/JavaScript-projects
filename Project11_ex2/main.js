const endTime = new Date('2026-04-05 12:10:00').getTime();
const spanD = document.querySelector('span.d');
const spanH = document.querySelector('span.h');
const spanM = document.querySelector('span.m');
const spanS = document.querySelector('span.s');

setInterval(() => {
	const nowTime = new Date().getTime(); //tyle milisekund upłnęło od 1 stycznia 1970r.
	const days = Math.floor(endTime / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24));
	let hours = Math.floor(endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24;
	hours = hours < 10 ? `0${hours}` : hours;
	let minutes = Math.floor(endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60;
	minutes = minutes < 10 ? `0${minutes}` : minutes;
	let secs = Math.floor(endTime / 1000 - nowTime / 1000) % 60;
	secs = secs < 10 ? `0${secs}` : secs;

	spanD.textContent = days;
	spanH.textContent = hours;
	spanM.textContent = minutes;
	spanS.textContent = secs;
}, 1000);
