const body = document.querySelector('body');

const left = document.getElementById('left');
const right = document.getElementById('right');

const slides = document.querySelectorAll('.slide');

const slidesLenght = slides.length;
let nowSlide = 0;

left.addEventListener('click', () => {
	if (nowSlide === 0) {
		nowSlide = slidesLenght - 1;
	} else {
		nowSlide = nowSlide - 1;
	}
	changeSlide();
});

right.addEventListener('click', () => {
	if (nowSlide === slidesLenght - 1) {
		nowSlide = 0;
	} else {
		nowSlide = nowSlide + 1;
	}
	changeSlide();
});

const changeSlide = () => {
	slides.forEach((slide) => {
		slide.classList.remove('active');
	});

	slides[nowSlide].classList.add('active');
	body.style.backgroundImage = slides[nowSlide].style.backgroundImage;
};
