const currentYear = document.getElementById("current-year");
const today = new Date();

currentYear.innerHTML = `&copy; ${today.getFullYear()} | Ethan Bayer | Illinois`;
document.getElementById("last-modified").innerHTML = `Last Modified: ${document.lastModified}`;