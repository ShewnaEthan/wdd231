const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');


async function getProphetData() {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        displayProphets(data.prophets)
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

getProphetData();

function displayProphets(prophets){
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let birthday = document.createElement("p");
        let birthPlace = document.createElement("p");
        let portrait = document.createElement("img");

        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`
        birthday.innerHTML = `Date of Birth: ${prophet.birthdate}`
        birthPlace.innerHTML = `Place of Birth: ${prophet.birthplace}`

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        card.classList.add("card");
        card.appendChild(fullName);
        card.appendChild(birthday);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}