const toggles = document.querySelectorAll('.faq-toogle')


toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        /* меняет у родителя */
        toggle.parentNode.classList.toggle('active')
    })
})