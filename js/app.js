const loadWeatherInfo = () => {
    const countryText = document.getElementById('search-field');
    const countryName = countryText.value;
    const APIKey = '6ff945bdb89df6a0f60a48b6c1b764d6';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${APIKey}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayWeatherInfo(data));
    
    countryText.value = "";
}

const displayWeatherInfo = (weatherData) => {
    const weatherDiv = document.getElementById('weatherDiv');
    weatherDiv.textContent = "";
    const div = document.createElement('div');

    const tempValue = parseFloat(weatherData.main.temp - 273.15);
    const temp = tempValue.toFixed(2);

    let iconcode = weatherData.weather[0].icon;
    let iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";

    div.innerHTML = `
        <img src=${iconurl} alt="">
        <h1>${weatherData.name}</h1>
        <h3><span>${temp}</span>&deg;C</h3>
        <h1 class="lead">${weatherData.weather[0].main}</h1>
    `;
    weatherDiv.appendChild(div);
}