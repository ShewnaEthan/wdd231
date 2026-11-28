import { locations } from "../data/points-of-interest.mjs";
const cardHolder = document.querySelector("#discover-card-holder")

locations.forEach(location => {
    let card = document.createElement("div")
    let info = document.createElement("div")
    let title = document.createElement("h2")
    let figure = document.createElement("figure")
    let image = document.createElement("img")
    let address = document.createElement("address")
    let description = document.createElement("p")
    let button = document.createElement("button")

    card.classList.add("discover-card")
    info.classList.add("info")
    title.textContent = location.name

    image.setAttribute("src", location.image)
    image.setAttribute("loading", "lazy")
    image.setAttribute("width", 300)
    figure.appendChild(image)

    address.textContent = location.address
    description.textContent = location.description
    button.textContent = "Learn More"

    card.appendChild(title)
    info.appendChild(figure)
    info.appendChild(address)
    info.appendChild(description)
    card.appendChild(info)
    card.appendChild(button)

    cardHolder.appendChild(card)
});

const welcome = document.querySelector("#welcome")
const today = Date.now()
const theDateToday = new Date()
const msToDays = 86400000;

let lastVisit = getLastVisit() || 0

let daysSinceLastVisit = ((today - lastVisit) / msToDays).toFixed(0)

// daysSinceLastVisit = 9

if (lastVisit == 0) {
    welcome.innerHTML = "Welcome! Let us know if you have any questions."
}
else if (daysSinceLastVisit < 1) {
    welcome.innerHTML = "Back so soon! Awesome!"
}
else {
    welcome.innerHTML = `You last visited ${daysSinceLastVisit} days ago`
}


console.log(theDateToday)
setLastVisit()


function setLastVisit() {
    localStorage.setItem("ls-last-visit", today)
}

function getLastVisit() {
    return localStorage.getItem("ls-last-visit")
}