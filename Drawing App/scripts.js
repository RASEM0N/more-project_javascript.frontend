const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const sizeEl = document.getElementById('size');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const clearEl = document.getElementById('clear');
const colorEl = document.getElementById('color');

let size = 5;
let color = 'black';
let isPressed = false;
let x;
let y;

(function defaultSettings() {
	sizeEl.innerText = size;
})();

decrease.addEventListener('click', () => {
	size--;
	sizeEl.innerText = size;
});

increase.addEventListener('click', () => {
	size++;
	sizeEl.innerText = size;
});

colorEl.addEventListener('change', (e) => {
	color = e.target.value;
});

clearEl.addEventListener('click', () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener('mousedown', (e) => {
	isPressed = true;

	x = e.offsetX;
	y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
	isPressed = false;

	x = undefined;
	y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
	if (isPressed) {
		const x2 = e.offsetX;
		const y2 = e.offsetY;

		drawCircle(x2, y2);
		drawLine(x, y, x2, y2);

		x = x2;
		y = y2;
	}
});

function drawCircle(x, y) {
	ctx.beginPath();
	ctx.arc(x, y, size, 0, Math.PI * 2);
	ctx.fillStyle = color;
	ctx.fill();
}

// заполняет отступы между шарами КанвасХак
function drawLine(x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle = color;
	ctx.lineWidth = size * 2;
	ctx.stroke();
}
