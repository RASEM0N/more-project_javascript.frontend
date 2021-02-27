const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerHTML = 0

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerHTML

        const increment = target / 200

        if ( target - c < increment){
            counter.innerHTML = target
            return
        }

        if (c < target){
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 15)
        }
    }

    updateCounter()
})

