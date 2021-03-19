const downBtn = document.querySelector('.down-button'),
	upBtn = document.querySelector('.up-button');

const imgSlides = document.querySelectorAll('.right-slide div');

const rSlides = document.querySelector('.right-slide');
const lSlides = document.querySelector('.left-slide');

let count = 0;
let lenghtSlides = imgSlides.length;

rSlides.style.top = `${count * -100}%`;
lSlides.style.top = `${(lenghtSlides - count - 1) * -100}%`;

upBtn.addEventListener('click', () => {
	count--;
	if (count < 0) {
		count = lenghtSlides - 1;
	}
	rSlides.style.top = `${count * -100}%`;
	lSlides.style.top = `${(lenghtSlides - count - 1) * -100}%`;
});

downBtn.addEventListener('click', () => {
	count++;
	if (count == lenghtSlides) {
		count = 0;
	}
	rSlides.style.top = `${count * -100}%`;
	lSlides.style.top = `${(lenghtSlides - count - 1) * -100}%`;
});
