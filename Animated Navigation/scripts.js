const nav = document.querySelector('#nav')
const button = document.querySelector('#toggle')


button.addEventListener('click', () => {
    nav.classList.toggle('active')
})