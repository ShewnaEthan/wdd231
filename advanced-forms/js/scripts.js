const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);

document.querySelector("#results").innerHTML = `
<p>Appointment for ${myInfo.get("last")}, ${myInfo.get("first")}</p>
<p>Proxy ${myInfo.get("ordinance")} on ${myInfo.get("date")} in the ${myInfo.get("location")} Temple.</p>
<p>Your Phone: ${myInfo.get("phone")}</p>
<p>Your Email: ${myInfo.get("email")}</p>`