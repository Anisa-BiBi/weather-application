const apiKey = "79fcc32e652d2ee9dadb912d4bcc34d0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
   if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
   }
   else{
    var data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main =="clouds"){
        weatherIcon.src ="images/clouds.png";
    }
    else if(data.weather[0].main =="clear"){
        weatherIcon.src ="images/sun.png";
    }
    else if(data.weather[0].main =="mist"){
        weatherIcon.src ="images/mist.png";
    }
    else if(data.weather[0].main =="smoke"){
        weatherIcon.src ="images/smoke.png";
    }
    else if(data.weather[0].main =="rain"){
        weatherIcon.src ="images/rain.png";
    }
    else if(data.weather[0].main =="drizzle"){
        weatherIcon.src ="images/partly-cloudy.png";
    }
    else {
        weatherIcon.src ="images/partly-cloudy.png";
    }

document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";
   }

}



searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
