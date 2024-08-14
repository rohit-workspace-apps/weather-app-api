import axios from "axios"
import React, { useState } from "react"

function Weather() {
  const [city, setCity] = useState()
  const [weather, setWeather] = useState()
  const handleCityChange = (e) => {
    setCity(e.target.value)
  }

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"7a8062b60b9879cfcffc42bfb7972437"}`
      )
      setWeather(response)
      console.log(response)
    } catch (err) {
      console.log("Error fetching data", err)
    }
  }

  const handleClick = () => {
    fetchWeather()
  }

  return (
    <div className="weather-container">
      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={handleCityChange}
      />
      <button onClick={handleClick}>Get Weather</button>
      {weather && (
        <>
          <div className="weather-info">
            <h3>{weather.data.name}</h3>
            <p>Temprature is: {weather.data.main.temp}</p>
            <p>{weather.data.weather[0].description}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Weather
