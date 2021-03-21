const textElement = document.getElementById('text');
const speedElement = document.getElementById('speed');

const text =
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores sunt in laudantium eligendi excepturi natus. Ea id quae sit maxime consequuntur facere, odio rerum, eaque laudantium laborum, iste perspiciatis nobis velit vero dolorem sequi ducimus aperiam dolorum illo ratione quaerat reiciendis consequatur odit nostrum. Est, aut. Delectus quam, aspernatur asperiores officia ex quas voluptatum aut, eligendi velit eveniet voluptates doloremque!';

let idx = 1;

let speed = 300 / speedElement.value;

writeText();

function writeText() {
	textElement.innerHTML = text.slice(0, idx);

	idx++;
	if (idx > text.length) {
		idx = 1;
	}

	setTimeout(writeText, speed);
}

speedElement.addEventListener('input', (e) => (speed = 300 / e.target.value));
