// Init weather object
const weather = new Weather("New Delhi", "india");

// Init UI object
const ui = new UI();

// We only want to display weather when the DOM loads
// * get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    // .then((results) => console.log(results))
    .then((results) => ui.paint(results))
    .catch((error) => console.log(error));
}
