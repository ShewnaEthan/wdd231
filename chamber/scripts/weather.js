const myGraphic = document.querySelector("#weather-icon")
const myDescription = document.querySelector("#description")
const myTemperature = document.querySelector("#temperature")
const forecast1 = document.querySelector("#dayone")
const forecast2 = document.querySelector("#daytwo")
const forecast3 = document.querySelector("#daythree")

const myDailyKey = "82f94dc031f310572cf9404e525ef2e2"
const myLat = "38.62393807776302"
const myLong = "-90.23573568525524"
const forecastDays = 3

const myDailyURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myDailyKey}&units=imperial`
const myForecastURL = `https://pro.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myDailyKey}&units=imperial`

getTodaysData()
getForecastData()

async function getTodaysData() {
    try {
        const response = await fetch(myDailyURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            displayTodaysResults(data)
        }
        else {
            throw Error(await response.text())
        }
    }
    catch (error)
    {
        console.log(error);
    }
}

async function getForecastData() {
    try {
        const response = await fetch(myForecastURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecastResults(data)
        }
        else {
            throw Error(await response.text())
        }
    }
    catch (error)
    {
        console.log(error);
    }
}

function displayTodaysResults(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute("src", iconsrc);
    myGraphic.setAttribute("alt", data.weather[0].description)
    myDescription.innerHTML = data.weather[0].description
    myTemperature.innerHTML = `${data.main.temp}&deg;F`
}

function displayForecastResults(data) {
    let currentDateTime = data.list[0].dt_txt
    let currentDate = currentDateTime.split(" ")
    forecast1.innerHTML = `${currentDate[0]} ${Math.floor(data.list[0].main.temp)}&deg;F`

    currentDateTime = data.list[8].dt_txt
    currentDate = currentDateTime.split(" ")
    forecast2.innerHTML = `${currentDate[0]} ${Math.floor(data.list[8].main.temp)}&deg;F`

    currentDateTime = data.list[16].dt_txt
    currentDate = currentDateTime.split(" ")
    forecast3.innerHTML = `${currentDate[0]} ${Math.floor(data.list[16].main.temp)}&deg;F`
}
