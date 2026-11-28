import { locations } from "../data/points-of-interest.mjs";
const cardHolder = document.querySelector("#discover-card-holder")

locations.forEach(location => {
    let card = document.createElement("div")
    let title = document.createElement("h2")
    let figure = document.createElement("figure")
    let image = document.createElement("img")
    let address = document.createElement("address")
    let description = document.createElement("p")
    let button =  document.createElement("button")

    card.classList.add("discover-card")
    title.textContent = location.name

    image.setAttribute("src", location.image)
    image.setAttribute("loading", "lazy")
    image.setAttribute("width", 300)
    figure.appendChild(image)

    address.textContent = location.address
    description.textContent = location.description
    button.textContent = "Learn More"

    card.appendChild(title)
    card.appendChild(figure)
    card.appendChild(address)
    card.appendChild(description)
    card.appendChild(button)

    cardHolder.appendChild(card)
});