const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    currentActive = currentActive > circles.length ? circles.length : currentActive;
    update();
});

prev.addEventListener('click', () => {
    currentActive--;

    currentActive = currentActive < 1 ? 1 : currentActive;
    update();
});

const update = () => {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    let number = ((currentActive - 1) / (circles.length - 1)) * 100 + `%`;
    progress.style.width = number;

    if (currentActive == 1) {
        prev.disabled = true;
    } else if (currentActive == circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
};

update();
