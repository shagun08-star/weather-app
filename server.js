const express = require("express");
const axios = require("axios");

const app = express();

const API_KEY = "f701923126b1012b470c7779a8990a3a";

app.use(express.static("public"));

app.get("/weather/:city", async (req, res) => {

    const city = req.params.city;

    try {

        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        res.json({
    city: response.data.name,
    country: response.data.sys.country,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    weather: response.data.weather[0].description,
    wind: response.data.wind.speed,
    feelsLike: response.data.main.feels_like,
    icon: response.data.weather[0].icon
});

    } catch (error) {
    console.log(error.response?.data || error.message);

    res.json({
        message: "City Not Found"
    });
}
});

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});