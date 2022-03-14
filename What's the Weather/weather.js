class Weather {
  constructor(city, country) {
    this.apiKey = "7d7b33296979d2c858041d71fd88bee4";
    this.city = city;
    this.country = country;
  }

  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}&units=metric`
    );

    const responseData = await response.json();

    return responseData;
  }

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
