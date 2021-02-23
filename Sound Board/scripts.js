const sounds = ['sound1', 'sound2', 'sound3', 'sound4']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('focus', () => {
        stopSongs()

        document.getElementById(sound).play()
    })

    btn.addEventListener('blur', () => {
        stopSongs()
    })

    document.getElementById('buttons').appendChild(btn)
})



function stopSongs(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}
