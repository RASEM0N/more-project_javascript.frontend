const smallcups = document.querySelectorAll('.cup-small')
const goal = document.querySelector('h3')
const liters = document.querySelector('#liters')
const procentage = document.querySelector('#procentage')
const remained = document.querySelector('.remained small')

// Объем большого стакана в литрах
const LITERS = 2
// Объем маленьких стакано в мл
const ML_LITERS = 500

// Предыдущий индекс стакана
let prevValue = 0;
// Обьем всех выбранный (синих) маленьких стаканов
let volumeWater = 0
// Остаток свободного места в большом стакане
let remWater = LITERS

goal.innerHTML = `Goal: ${LITERS} Liters`
liters.innerHTML = `${LITERS}L`

smallcups.forEach((cup, index) => {

    cup.innerHTML = `${ML_LITERS}ml`

    cup.addEventListener('click', () => {
        highlighCups(index)
    })
});

function highlighCups(index) {
    volumeWater = (index + 1) * ML_LITERS

    if (prevValue < index) {
        for (let i = prevValue; i <= index; i++) {
            smallcups[i].classList.add('full')
        }
    } else if (prevValue > index) {

        for (let i = index; i <= prevValue; i++) {
            smallcups[i].classList.remove('full')
        }

        volumeWater = prevValue >= index ? index * ML_LITERS : volumeWater
    } else {
        if (smallcups[index].classList.contains('full')) {
            smallcups[index].classList.remove('full')
            volumeWater = prevValue >= index ? index * ML_LITERS : volumeWater
        } else {
            smallcups[index].classList.add('full')
        }
    }


    let v = (volumeWater / (LITERS * 1000 / 100))
    let r = LITERS - volumeWater / 1000

    if (r <= 0) {
        remained.innerHTML = null
        liters.innerHTML = null
    } else {
        liters.innerHTML = `${r}L`
        remained.innerHTML = `Remained`
    }

    if (v === 0) {
        procentage.innerHTML = null
    } else if (v > 100){
        procentage.innerHTML = `Буль<br>Буль...`
    }
    else {
        procentage.innerHTML = `${v}%`
    }

    procentage.style.height = `${v}%`

    console.log(`VolumeWare: ${volumeWater} Prev: [${prevValue+1}] Index: [${index+1}] V: ${v}% R: ${r}`);

    prevValue = index
}