const like = document.querySelector('.like'),
	countLike = document.getElementById('times');

let count = 0;
countLike.innerText = count;

like.addEventListener('click', (e) => {
	const x = e.layerX,
		y = e.layerY;

	const heard = document.createElement('i');
	heard.className = 'fas fa-heart';
	console.log(e, x, y);
	count++;
	countLike.innerText = count;
	heard.style.top = `${y}px`;
	heard.style.left = `${x}px`;

	like.appendChild(heard);

	setTimeout(() => {
		heard.remove();
	}, 600);
});
