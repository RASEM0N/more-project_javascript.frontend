const arrayNotification = [
	'1 message',
	'2 message',
	'3 message',
	'4 message',
	'5 message',
	'6 message',
	'7 message',
	'8 message',
];

const toasts = document.querySelector('#toasts');

document.querySelector('.btn').addEventListener('click', () => {
	const toast = document.createElement('div');
	toast.classList.add('toast');
	toast.innerText =
		arrayNotification[Math.floor(Math.random() * arrayNotification.length)];

	toasts.appendChild(toast);

	setTimeout(() => {
		toast.remove();
	}, 3000);
});
