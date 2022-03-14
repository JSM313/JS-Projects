class UI {
  constructor() {
    this.location = document.querySelector("#w-location");
    this.desc = document.querySelector("#w-desc");
    this.string = document.querySelector("#w-string");
    this.details = document.querySelector("#w-details");
    this.icons = document.querySelector("#w-icon");
    this.humidity = document.querySelector("#w-humidity");
    this.feelsLike = document.querySelector("#w-feelslike");
    // this.sunrise = document.querySelector("#w-sunrise");
    // this.sunset = document.querySelector("#w-sunset");
    this.pressure = document.querySelector("#w-pressure");
    this.wind = document.querySelector("#w-wind");
  }

  paint(weather) {
    this.location.textContent = `${weather.name} - ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = weather.main.temp + "℃";
    this.icons.setAttribute(
      "src",
      `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    );
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
    // this.feelsLike.textContent = weather.main.feels_like;
    // this.sunrise.textContent = weather.sys.sunrise;
    // this.sunset.textContent = weather.sys.sunset;
    this.pressure.textContent = `Pressure Level: ${weather.main.pressure}`;
    this.feelsLike.textContent = `Feels Like ${weather.main.feels_like} ℃`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/s`;
  }
}
