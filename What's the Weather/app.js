// Initialising objects

const storage = new Storage();

const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.country);

const ui = new UI();

// We only want to display weather when the DOM loads
// * get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change Location Event
document.querySelector("#w-change-btn").addEventListener("click", (e) => {
  const city = document.querySelector("#city").value;
  const country = document.querySelector("#country").value;

  // Change Location
  weather.changeLocation(city, country);

  // Set Location in Local Storage
  storage.setLocationData(city, country);

  // Get Weather and display weather of the changed location
  getWeather();

  // Closing the modal
  const saveButton = document.querySelector("#w-change-btn");
  saveButton.setAttribute("data-dismiss", "modal");
});

function getWeather() {
  weather
    .getWeather()
    // .then((results) => console.log(results))
    .then((results) => ui.paint(results))
    .catch((error) => console.log(error));
}
