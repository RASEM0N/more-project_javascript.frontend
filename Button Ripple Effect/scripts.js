const btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {
	const x = e.layerX;
	const y = e.layerY;

	const circle = document.createElement('span');
	circle.classList.add('circle');

	circle.style.left = `${x}px`;
	circle.style.top = `${y}px`;

	this.appendChild(circle);

	setTimeout(() => circle.remove(), 1000);
});
