const body = document.querySelector('body')
const keyInfo = document.querySelectorAll('.key p')
const info = document.querySelector('.insert')


body.addEventListener('keydown', event => {
    keyInfo[0].textContent = event.key
    keyInfo[1].textContent = event.keyCode
    keyInfo[2].textContent = event.code

    info.classList.add('keydown')
})