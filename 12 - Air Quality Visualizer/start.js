(async () => {
  // เริ่มเขียนโค้ด

  const KEY = "abcd-efgh-ijkl-mnop";

  async function getAirQuality({ city, state, country }) {
    const response = await fetch(`https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${KEY}`);
    
    // const result = await response.json();
    // console.log(result);

    const { data: { current } } = await response.json();
    const { pollution, weather } = current;
    // console.log(pollution, weather);

    return { 
      aqi: pollution.aqius, 
      temperature: weather.tp, 
      humidity: weather.hu, 
      wind: weather.ws 
    }
  }

  function displayAirQuality( { city, state, country, aqi, temperature, humidity, wind }) {
    const cityElem = document.querySelector(".city");
    const stateCountryElem = document.querySelector(".state-country");
    const aqiElem = document.querySelector(".aqi > h1");
    const temperatureElem = document.querySelector(".temperature");
    const humidityElem = document.querySelector(".humidity");
    const windElem = document.querySelector(".wind");

    cityElem.innerText = city;
    stateCountryElem.innerText = `${state}, ${country}`;
    aqiElem.innerText = aqi;
    temperatureElem.innerText = `Temperature: ${temperature}`;
    humidityElem.innerText = `Humidity: ${humidity}%`;
    windElem.innerText = `Wind: ${wind} m/s`;
  }

  function setAirQualityColor(aqi) {
    if (aqi <= 50) {
      document.documentElement.style.setProperty("--current-aqi-color", "var(--good-aqi-color)")
    }
    else if (aqi <= 90) {
      document.documentElement.style.setProperty("--current-aqi-color", "var(--medium-aqi-color)")
    }
    else { 
      document.documentElement.style.setProperty("--current-aqi-color", "var(--bad-aqi-color)")
    }
  }

  async function run() {

    const city = "Lat Phrao";
    const state = "Bangkok";
    const country = "Thailand";

    const { aqi, temperature, humidity, wind } = await getAirQuality({ city, state, country });

    displayAirQuality({ city, state, country, aqi, temperature, humidity, wind })
    setAirQualityColor(aqi);
  }

  await run();

})();
