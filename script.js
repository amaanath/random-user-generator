window.onload = () => {
    RandomUserGenerator()
}

const RandomUserGenerator = () => {
    fetch('https://randomuser.me/api')
    .then((res) => {
        return res.json()
    }).then((data) => {
        showRandomUserData(data)
    })
}

showRandomUserData = (randomUser) => {
    console.log(randomUser)

    document.getElementById('name').innerText = `${randomUser.results[0].name.title} ${randomUser.results[0].name.first} ${randomUser.results[0].name.last}`

    document.getElementById('email').innerText = `${randomUser.results[0].email}`



    
}