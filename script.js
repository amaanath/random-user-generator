window.onload = () => {
    randomUserGenerator()
}

const randomUserGenerator = () => {
    fetch('https://randomuser.me/api')
    .then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data)
        showRandomUserData(data)
    })
}

showRandomUserData = (randomUser) => {

    if (randomUser.results[0].gender === "male") {
        document.getElementById('gender').innerHTML = "<i class='fas fa-mars'></i>"
    } else {
        document.getElementById('gender').innerHTML = "<i class='fas fa-venus'></i>"
    }

    document.getElementById('name').innerText = `${randomUser.results[0].name.title} ${randomUser.results[0].name.first} ${randomUser.results[0].name.last}`

    document.getElementById('age').innerText = `${randomUser.results[0].dob.age}`

    document.getElementById('email').innerText = `${randomUser.results[0].email}`

    document.getElementById('phone').innerText = `${randomUser.results[0].phone}`

    
}