const text = document.getElementById("joke")
const btn = document.getElementById("jokeBtn")

btn.addEventListener('click', async () => {
    const joke = await fetch("https://icanhazdadjoke.com/", {
        headers:{
            Accept: "application/json"
        }
    }).then(
        resp => resp.json()
    ).then(
        data => data.joke).catch(
            error => console.error(error))

    text.innerText = joke
})