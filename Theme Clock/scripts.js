const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.seconds');

const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = [
	'Понедельник',
	'Вторник',
	'Среда',
	'Четверг',
	'Пятница',
	'Суббота',
	'Воскресенье',
];

const months = [
	'Январь',
	'Февраль',
	'Март',
	'Апрель',
	'Май',
	'Июнь',
	'Июль',
	'Август',
	'Сентябрь',
	'Октябрь',
	'Ноябрь',
	'Декабрь',
];

toggle.addEventListener('click', (e) => {
	const html = document.querySelector('html');
	if (html.classList.contains('dark')) {
		html.classList.remove('dark');
		e.target.innerHTML = 'Dark mode';
	} else {
		html.classList.add('dark');
		e.target.innerHTML = 'Light mode';
	}
});

const scale = (num, in_min, in_max, out_min, out_max) =>
	((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;

function setTime() {
	const time = new Date();
	const month = time.getMonth();
	const day = time.getDay();
	const date = time.getDate();
	const hours = time.getHours();

	const hoursForClock = hours % 12;
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();

	hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		hoursForClock,
		0,
		11,
		0,
		360
	)}deg)`;
	minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		minutes,
		0,
		59,
		0,
		360
	)}deg)`;

	secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		seconds,
		0,
		59,
		0,
		360
	)}deg)`;

	timeEl.innerText = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
	dateEl.innerHTML = `${days[day - 1]}, ${months[month]}
				<span class="circle">${date}</span>`;
}

setTime();

setInterval(setTime, 1000);
