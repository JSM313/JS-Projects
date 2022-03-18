// Shortcut for console.log
const log = (arg) => console.log(arg);
const error = (arg) => console.error(error);

// Init speech synthesis API
const synthesis = window.speechSynthesis;

// DOM ELEMENTS

const textForm = document.querySelector("form");

const textInput = document.querySelector("#text-input");

const voiceSelect = document.querySelector("#voice-select");

const rate = document.querySelector("#rate");

const rateValue = document.querySelector("#rate-value");

const pitch = document.querySelector("#pitch");

const pitchValue = document.querySelector("#pitch-value");

const body = document.querySelector('body');

// Initializing Voices arary

let voices = [];

const getVoices = () => {
  voices = synthesis.getVoices();

  // Loop through voices and crete an option for each one.

  voices.forEach((voice) => {
    // Create an option element.
    const option = document.createElement("option");

    // Fill option with voice and language.
    option.textContent = voice.name + "(" + voice.lang + ")";

    // Set needed option attributes
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);

    voiceSelect.appendChild(option);
  });
};

getVoices();
if (synthesis.onvoiceschanged !== undefined) {
  synthesis.onvoiceschanged = getVoices;
}

// Speak

const speak = () => {



  // Check if speaking already.
  if (synthesis.speaking) {
    error("Already speaking...");
    return;
  }

  // Check if text area is not empty.
  if (textInput.value != "") {

    // ADD BACKGROUND ANIMATION
    body.style.background = '#141414 url(./img/wave.gif)';

    body.style.backgroundRepeat = 'repeat-x'

    body.style.backgroundSize = '100% 100%';
    // Get speak text

    const speakText = new SpeechSynthesisUtterance(textInput.value); // this will allow the api to read and synthesize the text we pass in the text area.

    // Speak end.
    speakText.onend = (e) => {
      log("Done speaking...");
      body.style.background = '#141414';
    };

    // Speak error
    speakText.onerror = (e) => error("Something went wrong");

    // Selected Voice
    const selectedVoice =
      voiceSelect.selectedOptions[0].getAttribute("data-name");

    // Loop through voices
    voices.forEach((voice) => {
      if (voice.name === selectedVoice) {
        speakText.voice = voice;
      }
    });

    // Set Pitch and rate.
    speakText.rate = rate.value;
    speakText.pitch = pitch.value;

    // Speak
    synthesis.speak(speakText);
  }
};

// EVENT LISTENERS

// FORM SUBMISSION
textForm.addEventListener("submit", (e) => {

  e.preventDefault(); // prevent from submitting.

  speak();

  textInput.blur();
});

// When we change the value of the rate.
rate.addEventListener("change", (e) => (rateValue.textContent = rate.value));

// Pitch value change
rate.addEventListener('change', e => pitchValue.textContent = pitch.value);

// Event To trigger speaking as soon as we select the voice rather than clicking on the 'Speak it' button repeatedly

voiceSelect.addEventListener('change', e => speak());