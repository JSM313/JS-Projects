const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random';

const quoteDisplayElement = document.getElementById('quoteDisplay');

const quoteInputElement = document.getElementById('quoteInput');

const timerElement = document.getElementById('timer');

quoteInputElement.addEventListener('input', () => {
  const arrayQuote = quoteDisplayElement.querySelectorAll('span');

  const arrayValue = quoteInputElement.value.split('');

  const correct = true;

  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index];

    if (character == null) {
      characterSpan.classList.remove('correct');

      characterSpan.classList.remove('incorrect');

      correct = false;
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add('correct');

      characterSpan.classList.remove('incorrect');
    } else {
      characterSpan.classList.add('incorrect');

      characterSpan.classList.remove('correct');

      correct = false;
    }
  });

  if (correct) renderNewQuote();
});

const getRandomQuote = async () => {
  const response = await fetch(RANDOM_QUOTE_API_URL);
  const data = await response.json();
  return data.content;
};

const renderNewQuote = async () => {
  const quote = await getRandomQuote();

  quoteDisplayElement.innerText = '';

  quote.split('').forEach((character) => {
    const characterSpan = document.createElement('span');
    characterSpan.innerText = character;
    quoteDisplayElement.appendChild(characterSpan);
  });
  quoteInputElement.value = null;
  startTimer();
};

let startTime;

const startTimer = () => {
  timerElement.inner = 0;
  startTime = new Date();
  setInterval(() => {
    timer.innerText = getTimerTime();
  }, 1000);
};

const getTimerTime = () => Math.floor((new Date() - startTime) / 1000);

renderNewQuote();
