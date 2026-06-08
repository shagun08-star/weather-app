async function searchWeather() {

    const city = document.getElementById("city").value;

    document.getElementById("result").innerHTML =
        "<p>Loading...</p>";

    const response =
        await fetch(`/weather/${city}`);

    const data =
        await response.json();

    console.log(data);

    if (data.message) {
        document.getElementById("result").innerHTML =
            "<h3>City Not Found</h3>";
        return;
    }

    document.getElementById("result").innerHTML = `
        <h2>${data.city}, ${data.country}</h2>

        <img src="https://openweathermap.org/img/wn/${data.icon}@2x.png">

        <h3>${data.temperature} °C</h3>

        <p><b>Weather:</b> ${data.weather}</p>

        <p><b>Feels Like:</b> ${data.feelsLike} °C</p>

        <p><b>Humidity:</b> ${data.humidity}%</p>

        <p><b>Wind Speed:</b> ${data.wind} m/s</p>
    `;

    document.getElementById("city").addEventListener("keypress", function (event) {

        if (event.key === "Enter") {
            searchWeather();
        }

    });
}