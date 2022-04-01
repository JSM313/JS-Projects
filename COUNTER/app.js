const log = (argument) => console.log(argument);

const increaseCounter = document.querySelector(".button-primary");
const decreaseCounter = document.querySelector(".decreementer");

const displayCounter = document.getElementById("counter-value");

//* Increementing the counter value when we click the 'increase counter' button

//* Increasing the counter.

// Display initial counter Value
let counterValue = 0;
displayCounter.textContent = counterValue;

const addCounter = () => {
  counterValue++;
  log(counterValue);
  displayCounter.textContent = counterValue;
};

increaseCounter.addEventListener("click", addCounter);

// *DECREASING THE COUNTER VALUE.

const decreaseValue = () => {
  if (counterValue === 0) {
    const div = document.createElement("div");
    div.style.textAlign = "Center";
    div.innerHTML = `<h1>Cannot decreement further</h1>`;
    div.classList.add("errorPrompt");
    const container = document.querySelector(".container");
    const buttonSection = document.querySelector("button-section");

    container.insertBefore(div, buttonSection);
    setTimeout(() => {
      div.textContent = "";
    }, 3000);
  } else {
    counterValue--;
    displayCounter.classList.remove("errorPrompt");
    displayCounter.textContent = counterValue;
  }
};

decreaseCounter.addEventListener("click", decreaseValue);
