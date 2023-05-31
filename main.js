let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        let temperature = response.main.temp;
        let pressure = response.main.pressure;
        let description = response.weather[0].description;
        let humidity = response.main.humidity;
        let windSpeed = response.wind.speed;
        let windDirection = response.wind.deg;
        let iconCode = response.weather[0].icon;

        document.getElementById('temperature').innerHTML = temperature + " °C";
        document.getElementById('pressure').innerHTML = pressure + " hPa";
        document.getElementById('description').innerHTML = description;
        document.getElementById('humidity').innerHTML = humidity + "%";
        document.getElementById('windSpeed').innerHTML = windSpeed + " m/s";
        document.getElementById('windDirection').innerHTML = windDirection + "°";

        let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        document.getElementById('weatherIcon').src = iconUrl;
    }
};

xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19", true);
xhr.send();