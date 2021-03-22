const getElement = (type) => {
	switch (type) {
		case 'uppercase': {
			const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
			return letters[Math.floor(Math.random() * letters.length)];
		}
		case 'lowercase': {
			const letters = 'abcdefghijklmnopqrstuvwxyz';
			return letters[Math.floor(Math.random() * letters.length)];
		}
		case 'numbers': {
			const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
			return numbers[Math.floor(Math.random() * numbers.length)];
		}
		case 'symbols': {
			const symbols = customEl.value
				? customEl.value
				: '!@#$%^&*(){}[]=<>/,.';
			return symbols[Math.floor(Math.random() * symbols.length)];
		}
	}
};

let generateLenght;
let generateObj = {
	uppercase: () => getElement('uppercase'),
	lowercase: () => getElement('lowercase'),
	numbers: () => getElement('numbers'),
	symbols: () => getElement('symbols'),
};

generateEl.addEventListener('click', (e) => {
	e.stopPropagation();
	protectionLenght();

	generatePassword();
});

clipboard.addEventListener('click', (e) => {
	e.stopPropagation();
	const textarea = document.createElement('textarea');
	const password = result.innerText;

	if (!password) return;

	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
});

document.body.addEventListener('click', (e) => {
	if (e.target.tagName === 'INPUT') return;
	document.querySelector('.setting-yet').classList.remove('active');
});

document.querySelector('.setting-yet').addEventListener('click', (e) => {
	e.stopPropagation();
	document.querySelector('.setting-yet').classList.toggle('active');
});

customEl.addEventListener('click', (e) => {
	e.stopPropagation();
});

const protectionLenght = () => {
	let includeLenght = 0;

	includeLenght = uppercaseEl.checked ? includeLenght + 1 : includeLenght;
	includeLenght = lowercaseEl.checked ? includeLenght + 1 : includeLenght;
	includeLenght = numbersEl.checked ? includeLenght + 1 : includeLenght;
	includeLenght = symbolsEl.checked ? includeLenght + 1 : includeLenght;

	generateLenght = {
		uppercase: [0, uppercaseEl.checked],
		lowercase: [0, lowercaseEl.checked],
		numbers: [0, numbersEl.checked],
		symbols: [0, symbolsEl.checked],
	};

	let luckyEl = true;
	for (const key in generateLenght) {
		if (generateLenght[key][1]) {
			let justNumber = Math.floor(lenghtEl.value / includeLenght);
			let luckyNumber = justNumber + (lenghtEl.value % includeLenght);
			generateLenght[key][0] = luckyEl ? luckyNumber : justNumber;
			luckyEl = false;
		} else {
			generateLenght[key][0] = 0;
		}
	}
};
const generatePassword = () => {
	const resultArray = [];

	for (const key in generateLenght) {
		if (generateLenght[key][1]) {
			for (let i = 0; i < generateLenght[key][0]; i++) {
				resultArray.push(generateObj[key]());
			}
		}
	}

	resultArray.sort(() => {
		return Math.random() - 0.5;
	});

	result.innerText = resultArray.join('');
};
