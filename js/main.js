document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
    const trickName = document.querySelector('input').value.replaceAll(' ','').replaceAll('-','').replaceAll("'", "").toLowerCase()

    console.log(trickName)

    try {
        const res = await fetch(`https://the-skate-api.herokuapp.com/api/${trickName}`)
        const data = await res.json()
        console.log(data)
        changeContent(data)
    } catch(error) {
        console.log(error)
    }
}

const trickName = document.querySelector('#trickNameDisplay')
const trickImage = document.querySelector('#trickImageDisplay')

function changeContent(data) {
    trickName.innerText = data.name
    trickImage.src = ""
}