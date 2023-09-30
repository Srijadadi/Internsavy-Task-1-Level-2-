const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const searchBtn = document.getElementById('search-btn');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const weatherInfo = document.querySelector('.weather-info');

searchBtn.addEventListener('click', () => {
    const city = document.getElementById('city').value;
    getWeatherData(city);
});

async function getWeatherData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (response.ok) {
        cityName.textContent = data.name;
        temperature.textContent = `${data.main.temp}°C`;
        description.textContent = data.weather[0].description;
        weatherInfo.style.display = 'block';
    } else {
        alert('City not found. Please try again.');
    }
}
