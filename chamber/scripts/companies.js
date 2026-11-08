const cardHolder = document.querySelector(".card-holder");
const listBtn = document.querySelector("#list-btn");
const gridBtn = document.querySelector("#grid-btn");

listBtn.addEventListener("click", () => {
    cardHolder.classList.add("list");
    cardHolder.classList.remove("grid");
});

gridBtn.addEventListener("click", () => {
    cardHolder.classList.add("grid");
    cardHolder.classList.remove("list");
});

async function getMemberData() {
    try {
        const response = await fetch("./data/members.json")
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        };
        const data = await response.json();
        displayMembers(data.chamberMembers);
    }
    catch (error) {
        console.log(Error());
    };
};

getMemberData()

function displayMembers(members) {
    members.forEach((member) => {
        let card = document.createElement("div");
        let company = document.createElement("h2");
        let image = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let membershipLVL = document.createElement("p");
        let url = document.createElement("a")

        card.classList.add("card");
        company.innerHTML = `<strong>${member.company}</strong>`;
        address.innerHTML = `Address: ${member.address}`;
        phone.innerHTML = `Phone: ${member.phone}`;
        membershipLVL.innerHTML = `Membership: ${member.membership}`;
        membershipLVL.classList.add("membership")

        url.innerHTML = "Website";
        url.setAttribute("href", member.url)

        image.setAttribute("src", member.image);
        image.setAttribute("alt", `${member.company}, company logo`)

        card.appendChild(company);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(membershipLVL);

        cardHolder.appendChild(card);
    });
};