const spotlight = document.querySelector("#spotlight")

async function getMemberData() {
    try {
        const response = await fetch("./data/members.json")
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        };
        const data = await response.json();
        console.log(data); 
        displayRandomMembers(data.chamberMembers, Math.random() * (3 - 1) + 1)
    }
    catch (error) {
        console.log(Error());
    };
};
getMemberData();

function displayRandomMembers(data, numToDisplay) {
    let filiteredMembers = data.filter(member => (member.membership == "Gold" || member.membership == "Silver"))
    for (let i = 0; i < numToDisplay; i++) {
        let diplayIndex = getRandomInt(filiteredMembers.length)

        let card = document.createElement("div");
        let company = document.createElement("h3");
        let image = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let membershipLVL = document.createElement("p");
        let url = document.createElement("a")

        card.classList.add("card");
        company.innerHTML = `<strong>${filiteredMembers[diplayIndex].company}</strong>`;
        address.innerHTML = `Address: ${filiteredMembers[diplayIndex].address}`;
        phone.innerHTML = `Phone: ${filiteredMembers[diplayIndex].phone}`;
        membershipLVL.innerHTML = `Membership: ${filiteredMembers[diplayIndex].membership}`;
        membershipLVL.classList.add("membership")

        url.innerHTML = "Website";
        url.setAttribute("href", filiteredMembers[diplayIndex].url)

        image.setAttribute("src", filiteredMembers[diplayIndex].image);
        image.setAttribute("alt", `${filiteredMembers[diplayIndex].company}, company logo`)

        card.appendChild(company);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(membershipLVL);

        spotlight.appendChild(card);
        filiteredMembers.splice(diplayIndex, 1)
    }
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

