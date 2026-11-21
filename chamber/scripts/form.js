document.querySelector("#timestamp").value = new Date().toDateString()

const membershipLevels = [
    {
        level: "Non-profit",
        price: "Free",
        benifits: ["Events added to the event tab", "Access to Commerce Meetings"],
        description: "This membership level is perfect for charities, and business just getting started."
    },
    {
        level: "Bronze",
        price: "$199.99 per month",
        benifits: ["Events added to the event tab", "Access to Commerce Meetings", "Added to Commerce directory page"],
        description: "This membership level is for businesses looking for chances to be discovered"
    },
    {
        level: "Silver",
        price: "$399.99 per month",
        benifits: ["Events added to the event tab", "Access to Commerce Meetings", "Added to Commerce directory page", "Chance to be featured in the homepage spotlight"],
        description: "This membership level is for business that are wanting to show off what makes them special."
    },
    {
        level: "Gold",
        price: "$599.99 per month",
        benifits: ["Events added to the event tab", "Access to Commerce Meetings", "Added to Commerce directory page", "Chance to be featured in the homepage spotlight", "Discounts on city billboards", "Spotlight customiztion options."],
        description: "This membership level is for all the busniess that are looking to take marketing to the next step"
    }
]

const cardHolder = document.querySelector(".membership-holder")

membershipLevels.forEach(membership => {
    let card = document.createElement("div")
    let title = document.createElement("h2")
    let learn = document.createElement("p")
    let modal = document.createElement("dialog")

    card.classList.add("membership-card")
    title.innerHTML = `<strong>${membership.level}</strong>`
    learn.textContent = "Learn More"
    learn.addEventListener("click", () => {
        displayMembershipDetails(membership)
    })


    card.appendChild(title)
    card.appendChild(learn)
    card.appendChild(modal)

    cardHolder.append(card)
});

const membershipDetails = document.querySelector("#membership-details")

function displayMembershipDetails(membership) {
    membershipDetails.innerHTML = `
    <h3><strong>${membership.level}</strong></h3>
    <p>${membership.description}</p>
    <p>Membership Price: ${membership.price}</p>
    <p>Benifits:</p>`

    let benifits = document.createElement("div")
    benifits.classList.add("benifits")
    for (let i = 0; i < membership.benifits.length; i++) {
        let benifit = document.createElement("p")
        benifit.innerHTML = `-${membership.benifits[i]}`
        benifits.appendChild(benifit)
    }
    membershipDetails.appendChild(benifits)
    membershipDetails.showModal()
}

membershipDetails.addEventListener("click", () => {
    if (event.target === membershipDetails) {
        membershipDetails.close();
    }
})