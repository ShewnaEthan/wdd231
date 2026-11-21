const myInfo = new URLSearchParams(window.location.search);

console.log(myInfo.get("firstname"))

document.querySelector("#results").innerHTML = `
<h2>Submission Details</h2>
<p>Name: ${myInfo.get("firstname")} ${myInfo.get("lastname")}</p>
<p>Title: ${myInfo.get("organization-title")}</p>
<p>Phone: ${myInfo.get("phonenumber")}</p>
<p>Email: ${myInfo.get("email")}</p>
<p>Organization ${myInfo.get("organization-name")}</p>
<p>Membership Level: ${myInfo.get("level")}</p>
<p>Description: "${myInfo.get("description")}"</p>
<p>Submitted on: ${myInfo.get("timestamp")}<p>`