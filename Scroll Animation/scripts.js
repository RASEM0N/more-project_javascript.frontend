const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBox)

function checkBox() {
    const triggerBottom = window.innerHeight/5 * 4

    boxes.forEach(box => {
        /* Положение относительно области просмотра */
        // https://developer.mozilla.org/ru/docs/Web/API/Element/getBoundingClientRect
        const boxTop = box.getBoundingClientRect().top
        console.log(boxTop);

        if (boxTop < triggerBottom) box.classList.add('show')
        else box.classList.remove('show')
    });
}

checkBox()