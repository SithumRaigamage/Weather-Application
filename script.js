const apiKey = "Inset Ur API key";
const apiUrl = "Enter Url";

const searchBar = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const Response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (Response.status ==404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    }
    else{
        var data =await Response.json();
        console.log(data)
        document.querySelector(".city").innerHTML = innerHTML = data.name;
        document.querySelector(".temp").innerHTML = innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = innerHTML = data.wind.speed + " km/h";
        document.querySelector(".pressure").innerHTML = innerHTML = data.main.pressure + " Pa";

        const weatherType = data.weather[0].main;

        switch(weatherType){
            case "Clear":
                weatherIcon.src = "images/clear.png";
                break;
            case "Clouds":
                weatherIcon.src = "images/cloud.png";
                break;
            case "Drizzle":
                weatherIcon.src = "images/drizzle.png";
                break;
            case "Mist":
                weatherIcon.src = "images/mist.png";
                break;
            case "Rain":
                weatherIcon.src = "images/rain.png";
                break;
            case "Snow":
                weatherIcon.src = "images/snow.png";
                break;    
            default:
                weatherIcon.src = "";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display ="none";

    }

}
searchBtn.addEventListener("click" ,() =>{
    checkWeather(searchBar.value);
})
