const tagsEl = document.querySelector('.tags')
const textarea = document.querySelector('.textarea')


textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === `Enter`){
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect()
    }
})

function createTags(input){
    const tags = input.split(',').filter(tag => {
        return tag.trim()!==''
    }).map(tag => {
        return tag.trim()
    })
    tagsEl.innerHTML = ''

    tags.forEach(element => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerHTML = element
        tagsEl.appendChild(tagEl)
    });
    
}

function randomSelect(){
    const times = 100

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlight(randomTag)
        setTimeout(() => {
            unhighlight(randomTag)
        }, 100)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlight(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlight(tag){
    tag.classList.add('highlight')
}

function unhighlight(tag){
    tag.classList.remove('highlight')
}
