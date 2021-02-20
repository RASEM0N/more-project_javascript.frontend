const loading = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

const blurring = () => {

    load++

    if (load > 99) {
        clearInterval(intT)
    }

    loading.textContent = `${load}%`
    loading.style.opacity = scale(load, 0, 100, 1, 0)
    /* размытость 30 --> 0*/
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

const intT = setInterval(blurring, 30)